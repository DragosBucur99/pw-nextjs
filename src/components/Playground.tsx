import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useState, useEffect } from "react";
import {
  Button,
  Listbox,
  ListboxItem,
  Spinner,
  Skeleton,
} from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { VscDebugStart as StartIcon } from "react-icons/vsc";
import { IoMdDownload as DownloadIcon } from "react-icons/io";

export default function Playground() {
  const apiURL = process.env.URL || process.env.NEXT_PUBLIC_URL;
  const [data, setData] = useState<any>();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [spinner, setSpinner] = useState<boolean>(false);
  const [tests, setTests] = useState<string[]>([]);
  const [selectedTest, setSelectedTest] = useState();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  // const [selectedKeys, setSelectedKeys] = useState(new Set(tests[0]));

  const fetchTests = async () => {
    let resp, body;
    try {
      resp = await fetch(apiURL + "/tests");
      body = await resp.json();
      setTests(body.tests);
    } catch (error) {
      console.error("Error fetching tests:", error);
    } finally {
      if (resp?.ok) setIsLoaded(true);
    }
  };

  useEffect(() => {
    fetchTests();
  }, []);

  const fetchAPI = async () => {
    let body;
    try {
      setSpinner(true);
      // notify();
      const resp = await fetch(apiURL + "/playground", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          TEST: selectedTest,
        }),
      });
      body = await resp.json();
    } catch (error) {
      console.log(error);
    } finally {
      setSpinner(false);
      setData(body);
    }
  };

  const runTests = async () => {
    try {
      await toast.promise(fetchAPI(), {
        pending: "Running test...",
        success: "Test ran successfully!",
        error: "Test failed to run!",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchZip = async () => {
    try {
      // Make a request to the '/download-results' endpoint
      const response = await fetch(apiURL + "/result", {
        method: "GET",
      });

      if (response.ok) {
        // Trigger download if the response is successful
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "test-results.zip";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      } else {
        console.error("Error downloading zip file");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <Skeleton isLoaded={isLoaded}>
      <div className="flex flex-col gap-2">
        <div className="border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
          <Listbox
            aria-label="Single selection example"
            variant="flat"
            disallowEmptySelection
            selectionMode="single"
            onSelectionChange={(keys) =>
              setSelectedTest(
                // @ts-ignore
                tests[Array.from(keys).join("")].replace(/['"]/g, "")
              )
            }
          >
            {tests.map((test, index) => (
              <ListboxItem key={index}>{test.replace(/['"]/g, "")}</ListboxItem>
            ))}
          </Listbox>
        </div>
        {spinner && (
          <div className="flex border-small border-default-200 px-1 py-2 rounded-small min-h-[10rem] items-center justify-center">
            <Spinner label="Loading..." />
          </div>
        )}
        {data && !spinner && (
          <div className="flex flex-col gap-2 border-small border-default-200 px-1 py-2 rounded-small min-h-[10rem] items-center justify-center">
            {data.summary.toLowerCase().includes("1 ok")
              ? "Test passed"
              : "Test failed"}
            <div>
              <Button
                onPress={onOpen}
                color={
                  data.summary.toLowerCase().includes("1 ok")
                    ? "success"
                    : "danger"
                }
              >
                Preview Report
              </Button>
              <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                size="5xl"
                className="h-[80%]"
              >
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex flex-col gap-1">
                        Report
                      </ModalHeader>
                      <ModalBody>
                        <iframe
                          title="Your HTML Content"
                          src={apiURL + "/html"}
                          width="100%"
                          height="100%"
                        />
                      </ModalBody>
                      <ModalFooter>
                        <Button
                          color="danger"
                          variant="light"
                          onPress={onClose}
                        >
                          Close
                        </Button>
                        <Button
                          color="primary"
                          startContent={<DownloadIcon />}
                          onPress={fetchZip}
                        >
                          Download
                        </Button>
                      </ModalFooter>
                    </>
                  )}
                </ModalContent>
              </Modal>
            </div>
          </div>
        )}
        <Button color="primary" onClick={runTests} startContent={<StartIcon />}>
          Run Test
        </Button>

        <ToastContainer />
      </div>
    </Skeleton>
  );
}
