class StringMethodsDemo {

    public run(): void {

        const text: string = "  Welcome To TypeScript Automation Testing  ";
        const email: string = "qa.engineer@test.com";
        const empId: string = "EMP12345";

        console.log("Original String:");
        console.log(text);

        // trim()
        console.log("\ntrim()"); 
        console.log(text.trim()); 

        // toUpperCase()
        console.log("\ntoUpperCase()");
        console.log(text.toUpperCase());

        // toLowerCase()
        console.log("\ntoLowerCase()");
        console.log(text.toLowerCase());

        // length
        console.log("\nlength");
        console.log(text.length);

        // includes()
        console.log("\nincludes()");
        console.log(text.includes("TypeScript"));

        // startsWith()
        console.log("\nstartsWith()");
        console.log(text.trim().startsWith("Welcome"));

        // endsWith()
        console.log("\nendsWith()");
        console.log(email.endsWith(".com"));

        // replace()
        console.log("\nreplace()");
        console.log(text.replace("TypeScript", "Playwright"));

        // replaceAll() equivalent using replace with a global regex
        console.log("\nreplaceAll()");
        console.log("QA QA QA".replace(/QA/g, "Automation"));

        // split()
        console.log("\nsplit()");
        console.log(email.split("@"));

        // substring()
        console.log("\nsubstring()");
        console.log(empId.substring(0, 3));

        // slice()
        console.log("\nslice()");
        console.log(empId.slice(3));

        // charAt()
        console.log("\ncharAt()");
        console.log(empId.charAt(0));

        // at() - use slice for negative index to support older TS targets
        console.log("\nat()");
        console.log(empId.slice(-1));

        // indexOf()
        console.log("\nindexOf()");
        console.log(empId.indexOf("1"));

        // lastIndexOf()
        console.log("\nlastIndexOf()");
        console.log("QA Automation QA".lastIndexOf("QA"));

        // concat()
        console.log("\nconcat()");
        console.log("Hello".concat(" ", "World"));

        // repeat()
        console.log("\nrepeat()");
        console.log("QA ".repeat(3));

        // padStart()
        console.log("\npadStart()");
        console.log("5".padStart(3, "0"));

        // padEnd()
        console.log("\npadEnd()");
        console.log("QA".padEnd(5, "*"));

        // match()
        console.log("\nmatch()");
        console.log(email.match(/qa/i));

        // search()
        console.log("\nsearch()");
        console.log(email.search("engineer"));

        // localeCompare()
        console.log("\nlocaleCompare()");
        console.log("apple".localeCompare("banana"));

        // valueOf()
        console.log("\nvalueOf()");
        console.log(text.valueOf());

        // String interpolation
        const userName: string = "Giri";
        console.log("\nTemplate Literal");
        console.log(`Welcome ${userName} to TypeScript`);
    }
}

const demo = new StringMethodsDemo();
demo.run();