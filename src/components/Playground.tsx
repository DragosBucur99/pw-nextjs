import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useState, useEffect, useMemo } from "react";
import {
  Button,
  Listbox,
  ListboxItem,
  Spinner,
  Skeleton,
  Tabs,
  Tab,
  Card,
  CardBody,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Chip,
} from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { VscDebugStart as StartIcon } from "react-icons/vsc";
import { IoMdDownload as DownloadIcon } from "react-icons/io";
import { FaExclamationTriangle as ExclamationTriangle } from "react-icons/fa";

export default function Playground() {
  interface Test {
    title: string;
    steps?: string[];
    expectedOutput?: string;
    options?: {
      name: string;
      type: string;
      label: string;
    }[];
  }

  interface TestCase {
    steps: string[];
    expectedOutput: string;
    options: {
      name: string;
      type: string;
      label: string;
    }[];
  }

  const apiURL =
    process.env.NEXT_PUBLIC_URL || "https://api.dragosportfolio.com";
  const [data, setData] = useState<any>();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [spinner, setSpinner] = useState<boolean>(false);
  const [tests, setTests] = useState<Test[]>([]);
  const [selectedTest, setSelectedTest] = useState<any>();
  const [selectedKeyTest, setSelectedKeyTest] = useState(new Set(["0"]));
  const [testCase, setTestCase] = useState<TestCase>();
  const [reportTabVisibility, setReportTabVisibility] = useState<boolean>(true);
  const [focusTab, setFocusTab] = useState("case");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedKeys, setSelectedKeys] = useState(new Set(["fitness buddy"]));
  const [formData, setFormData] = useState({});

  const requiredInputs = Object.values(formData).filter(
    (value) => value === ""
  ).length;

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isFormValid = () => {
    // Check if all required fields are filled
    // @ts-ignore
    return Object.values(formData).every((field) => field.trim() !== "");
  };

  const selectedKeyTestValue = useMemo(
    () => Array.from(selectedKeyTest).join(", "),
    [selectedKeyTest]
  );

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  const fetchTests = async () => {
    let resp, body;
    try {
      resp = await fetch(apiURL + "/tests");
      body = await resp.json();
      setTests(body.tests);
    } catch (error) {
      console.error("Error fetching tests:", error);
    } finally {
      if (resp?.ok) {
        setIsLoaded(true);
        setSelectedTest(body.tests[0].title);
      }
    }
  };

  useEffect(() => {
    fetchTests();
  }, []);

  useEffect(() => {
    const test = tests.find((test) => test.title === selectedTest);
    if (test?.steps && test?.expectedOutput && test?.options) {
      setTestCase({
        steps: test.steps,
        expectedOutput: test.expectedOutput,
        options: test.options,
      });
    } else {
      setTestCase(undefined);
    }
    if (test && test.options) {
      const taskLabels = test.options.reduce((labels, option) => {
        // @ts-ignore
        labels[option.label] = "";
        return labels;
      }, {});
      setFormData(taskLabels);
    }
    setReportTabVisibility(true);
    setFocusTab("case");
  }, [selectedTest]);

  const fetchAPI = async () => {
    let body;
    try {
      setSpinner(true);
      setReportTabVisibility(false);
      setFocusTab("report");
      // notify();
      const resp = await fetch(apiURL + "/playground", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          TEST: selectedTest,
          ...formData,
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
      <div className="flex flex-col gap-2 lg:flex-row">
        <div className="border-small px-1 py-2 rounded-small border-default-200 dark:border-default-200 overflow-y-auto lg:flex-1">
          <div className="px-2">
            <Dropdown>
              <DropdownTrigger>
                <Button variant="solid" className="capitalize">
                  {selectedValue}
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disabledKeys={["catan", "automation"]}
                aria-label="Single selection example"
                variant="faded"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selectedKeys}
                // @ts-ignore
                onSelectionChange={setSelectedKeys}
              >
                <DropdownItem key="fitness buddy">Fitness Buddy</DropdownItem>
                <DropdownItem key="catan" description="Coming soon...">
                  Catan
                </DropdownItem>
                <DropdownItem key="automation" description="Coming soon...">
                  Automation
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          <Listbox
            id="testsList"
            className="mt-5"
            aria-label="Single selection example"
            variant="flat"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={selectedKeyTestValue}
            onSelectionChange={(keys) => {
              // @ts-ignore
              setSelectedTest(tests[Array.from(keys).join("")].title);
              // @ts-ignore
              return setSelectedKeyTest(keys);
            }}
          >
            {tests.map((test, index) => (
              <ListboxItem key={index}>{test.title}</ListboxItem>
            ))}
          </Listbox>
        </div>
        {testCase && (
          <div className="flex flex-col gap-2 border-small border-default-200 px-3 py-2 rounded-small text-base lg:flex-1 h-72">
            <Tabs
              aria-label="Options"
              selectedKey={focusTab}
              // @ts-ignore
              onSelectionChange={setFocusTab}
            >
              <Tab key="case" title="Test case">
                <Card className="h-full">
                  <CardBody className="flex flex-col gap-2 h-52 overflow-y-auto">
                    <span className="text-[#0070f0] font-bold">Steps:</span>
                    <ul>
                      {testCase.steps.map((step, index) => (
                        <li key={index}>{`${index + 1}. ${step}`}</li>
                      ))}
                    </ul>
                    <div>
                      <span className="text-[#0070f0] font-bold">
                        Expected output:
                      </span>
                      <p>{testCase.expectedOutput}</p>
                    </div>
                  </CardBody>
                </Card>
              </Tab>
              <Tab
                key="options"
                title={
                  <div className="flex items-center space-x-1">
                    {requiredInputs > 0 && (
                      <ExclamationTriangle className="text-red-400" size={10} />
                    )}
                    <span>Options</span>
                    {requiredInputs > 0 && (
                      <Chip size="sm" variant="faded" color="warning">
                        {requiredInputs}
                      </Chip>
                    )}
                  </div>
                }
              >
                <Card className="h-full">
                  <CardBody className="h-52 overflow-y-auto">
                    <ul>
                      {testCase.options?.map((option, index) => (
                        <li key={index} className="flex flex-col gap-3">
                          {option.name}
                          {option.type === "searchbox" && (
                            <Input
                              type="text"
                              // @ts-ignore
                              value={formData[option.label]}
                              name={option.label}
                              onChange={handleInputChange}
                            />
                          )}
                        </li>
                      ))}
                    </ul>
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="report" title="Report" isDisabled={reportTabVisibility}>
                <Card className="h-full">
                  {spinner && (
                    <CardBody className="flex items-center justify-center h-52 overflow-y-auto">
                      <Spinner label="Loading..." />
                    </CardBody>
                  )}
                  {data && !spinner && (
                    <CardBody className="flex gap-5 items-center justify-center h-52">
                      {data.summary.toLowerCase().includes("1 ok") ? (
                        <p className="text-xl">Test passed</p>
                      ) : (
                        <p className="text-xl">Test failed</p>
                      )}
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
                    </CardBody>
                  )}
                </Card>
              </Tab>
            </Tabs>
          </div>
        )}
      </div>
      <div className="flex items-center gap-4 mt-2">
        <Button
          isDisabled={!isFormValid()}
          color="primary"
          size="lg"
          onClick={runTests}
          startContent={<StartIcon />}
        >
          Run Test
        </Button>
        {!isFormValid() && (
          <div className="flex items-center showArrow">
            <Button
              onClick={() => setFocusTab("options")}
              size="sm"
              radius="full"
              color="warning"
            >
              Options missing...
            </Button>
          </div>
        )}
      </div>
    </Skeleton>
  );
}
