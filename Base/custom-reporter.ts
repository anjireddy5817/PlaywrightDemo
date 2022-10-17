import { FullConfig, FullResult, Reporter, Suite, TestCase, TestError, TestResult } from "@playwright/test/reporter";

let testLength:number =0;
let cotestLength:string = "";
class MyReporter implements Reporter
{
    suite: Suite;
    onBegin(config: FullConfig, suite: Suite): void {
    this.suite = suite;
    testLength = suite.allTests().length;
        console.log(`: Starting the run with : ${suite.allTests().length} : testcases`)
    }
    onTestBegin(test: TestCase): void {
        console.log(`: TestScript started : ${test.title}`)
    }
    onTestEnd(test: TestCase, result: TestResult): void {
        console.log(`: TestScript ended: ${test.title} : ${result.status}`)
    }
    onError(error: TestError): void {
        console.log(error.message);
    }
    onEnd(result: FullResult): void {
        let passedCount = 0;
        let copassedCount:string = "0";
        let failedCount = 0;
        let cofailedCount:string = "0";
        let skippedCount = 0;
        let coskippedCount:string = "0";
        let interruptCount = 0;
        let cointerruptCount:string = "0";
        let timeOutCount = 0;
        let cotimeOutCount:string = "0";
        let passedTestsList = [];
        const projectSuites = this.suite.suites;
        projectSuites.forEach((project) => {
            project.allTests().forEach((test) => {
                    test.results.forEach((result) => {
                        //console.log(": Testcase status: "+result.status);
                        if(result.status == 'passed') {
                            passedCount = passedCount + 1;
                            copassedCount = String(passedCount);
                        }
                        else if(result.status == 'failed') {
                            failedCount = failedCount + 1;
                            cofailedCount = String(failedCount);
                        }
                        else if(result.status == 'skipped') {
                            skippedCount = skippedCount + 1;
                            coskippedCount = String(skippedCount);
                        }
                        else if(result.status == 'interrupted') {
                            interruptCount = interruptCount + 1;
                            cointerruptCount = String(interruptCount);
                        }
                        else {
                            timeOutCount = timeOutCount + 1;
                            cotimeOutCount = String(timeOutCount);
                        }
                        
                    })
            })
        })
        cotestLength = String(testLength);
        console.log(`: Finished the run :  ${result.status}`)
        console.log(": Total testcases run: "+cotestLength)
        console.log(": Total testcases passed: "+copassedCount+"/"+cotestLength)
        console.log(": Total testcases failed: "+cofailedCount+"/"+cotestLength)
        console.log(": Total testcases skipped: "+coskippedCount+"/"+cotestLength)
        console.log(": Total testcases Interrupted: "+cointerruptCount+"/"+cotestLength)
        console.log(": Total testcases timeout: "+cotimeOutCount+"/"+cotestLength)
    }
} 
export default MyReporter;
