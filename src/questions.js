const questions = [
  // ═══════════════════════════════════════════
  // DOMAIN 1: Responsible AI (6 questions)
  // ═══════════════════════════════════════════
  {
    id: 1,
    domain: "Responsible AI",
    question: "A developer notices that GitHub Copilot frequently suggests a deprecated encryption library. What is the most likely cause?",
    options: [
      "Copilot is intentionally recommending older, more stable libraries",
      "The deprecated library was heavily represented in the training data",
      "Copilot's model is specifically trained on deprecated code for compatibility",
      "The developer's IDE settings are filtering out modern libraries"
    ],
    correct: 1,
    explanation: "Copilot's suggestions are influenced by the frequency of patterns in its training data. If a deprecated library was widely used in public repositories at the time of training, Copilot will suggest it more often — regardless of whether it's still recommended."
  },
  {
    id: 2,
    domain: "Responsible AI",
    question: "Which of the following best describes why human review of Copilot-generated code is essential?",
    options: [
      "Copilot-generated code cannot be compiled without manual edits",
      "Copilot may produce syntactically correct code that contains logic errors, security vulnerabilities, or doesn't match intended behavior",
      "GitHub requires a manual approval step before Copilot code can be committed",
      "Copilot only generates pseudocode that must be translated to real code"
    ],
    correct: 1,
    explanation: "Copilot can generate code that compiles and runs but may contain subtle bugs, security issues, or misaligned logic. It produces real code, not pseudocode, and there's no mandatory GitHub approval — but human review is a best practice."
  },
  {
    id: 3,
    domain: "Responsible AI",
    question: "What is the purpose of the duplicate detection filter in GitHub Copilot?",
    options: [
      "To remove duplicate lines within Copilot's suggestions",
      "To detect and block suggestions that match publicly available code on GitHub",
      "To prevent users from submitting duplicate pull requests",
      "To identify duplicate files in the user's repository"
    ],
    correct: 1,
    explanation: "The duplicate detection filter blocks code suggestions that closely match public code on GitHub (approximately 150+ characters). This reduces the risk of IP and licensing issues from inadvertently copying open-source code."
  },
  {
    id: 4,
    domain: "Responsible AI",
    question: "A team lead asks: 'Can we rely on Copilot to calculate tax rates for our financial app?' What is the best response?",
    options: [
      "Yes, Copilot is trained on financial data and can handle calculations accurately",
      "Yes, as long as you provide the tax tables in a comment above the function",
      "No, Copilot is a language model that predicts patterns — it cannot reliably perform precise mathematical calculations",
      "No, Copilot is prohibited from generating financial code by its terms of service"
    ],
    correct: 2,
    explanation: "Copilot is a language model, not a calculator. It generates code based on patterns, not mathematical reasoning. Any calculations in financial, scientific, or math-heavy domains must be independently verified."
  },
  {
    id: 5,
    domain: "Responsible AI",
    question: "Which type of bias is MOST likely to appear in GitHub Copilot suggestions?",
    options: [
      "Gender bias in variable naming conventions",
      "Overrepresentation of popular coding patterns even when better alternatives exist",
      "Bias toward paid libraries over free alternatives",
      "Intentional bias toward GitHub-owned technologies"
    ],
    correct: 1,
    explanation: "The most common form of bias in Copilot is the overrepresentation of frequently-seen patterns in training data. Popular approaches get suggested more, even when newer or objectively better alternatives exist."
  },
  {
    id: 6,
    domain: "Responsible AI",
    question: "An organization wants to use Copilot but is concerned about generating code that infringes on open-source licenses. Which action would BEST mitigate this risk?",
    options: [
      "Disable Copilot entirely to avoid all risk",
      "Enable the duplicate detection filter and establish a code review process for Copilot suggestions",
      "Only use Copilot for writing comments, not code",
      "Require developers to rewrite every Copilot suggestion from scratch"
    ],
    correct: 1,
    explanation: "Enabling the duplicate detection filter blocks suggestions matching public code, and combining that with human code review provides a practical balance of productivity and IP risk mitigation."
  },

  // ═══════════════════════════════════════════
  // DOMAIN 2: Plans & Features (7 questions)
  // ═══════════════════════════════════════════
  {
    id: 7,
    domain: "Plans & Features",
    question: "Which GitHub Copilot plan provides organization-level policy management and ensures code snippets are NOT retained for model training?",
    options: [
      "Copilot Individual",
      "Copilot Business",
      "Copilot Free",
      "Copilot Student"
    ],
    correct: 1,
    explanation: "Copilot Business provides organization-level admin controls, policy management, and guarantees that code snippets are not retained by GitHub for model training purposes."
  },
  {
    id: 8,
    domain: "Plans & Features",
    question: "What feature is exclusive to GitHub Copilot Enterprise?",
    options: [
      "Code completion in VS Code",
      "Copilot Chat in the IDE",
      "Knowledge Bases that index internal documentation and repositories",
      "The duplicate detection filter"
    ],
    correct: 2,
    explanation: "Knowledge Bases are an Enterprise-exclusive feature that allows organizations to index their internal docs and repos, enabling Copilot Chat to provide context-aware answers specific to the company's codebase."
  },
  {
    id: 9,
    domain: "Plans & Features",
    question: "An admin wants to prevent Copilot from providing suggestions in files within the `/secrets` directory. How should they configure this?",
    options: [
      "Add a .copilotignore file to the repository root",
      "Configure content exclusion rules in the organization's Copilot settings",
      "Delete the /secrets directory from GitHub",
      "Ask each developer to disable Copilot manually when editing secret files"
    ],
    correct: 1,
    explanation: "Organization admins can configure content exclusion rules in the Copilot settings at the org level. These rules prevent specified files/paths from being sent as context or receiving suggestions."
  },
  {
    id: 10,
    domain: "Plans & Features",
    question: "In which of the following environments can GitHub Copilot be used? (Select the most complete answer)",
    options: [
      "VS Code and Visual Studio only",
      "VS Code, Visual Studio, JetBrains IDEs, Neovim, GitHub.com, CLI, and GitHub Mobile",
      "Any text editor with an internet connection",
      "Only GitHub.com's built-in editor"
    ],
    correct: 1,
    explanation: "Copilot is available across a wide range of environments including VS Code, Visual Studio, JetBrains IDEs, Neovim, the GitHub CLI, GitHub.com (Copilot Chat), and GitHub Mobile."
  },
  {
    id: 11,
    domain: "Plans & Features",
    question: "What is GitHub Copilot CLI primarily used for?",
    options: [
      "Writing full applications from the command line",
      "Managing Copilot subscription billing",
      "Composing complex terminal commands by describing them in natural language",
      "Running automated code reviews on pull requests"
    ],
    correct: 2,
    explanation: "GitHub Copilot CLI helps developers compose complex terminal commands (git, shell, etc.) by describing what they want in natural language. It suggests commands and explains their syntax."
  },
  {
    id: 12,
    domain: "Plans & Features",
    question: "Who has permission to manage Copilot policies at the organization level?",
    options: [
      "Any organization member",
      "Only GitHub support staff",
      "Organization owners and members with appropriate admin permissions",
      "Only the user who purchased the Copilot subscription"
    ],
    correct: 2,
    explanation: "Organization owners and members with the appropriate admin permissions can manage Copilot policies, including enabling/disabling for members, configuring suggestion matching, and setting content exclusions."
  },
  {
    id: 13,
    domain: "Plans & Features",
    question: "With Copilot Individual, what happens to code snippets sent to the model?",
    options: [
      "They are always retained and used for model training",
      "They are never retained under any circumstances",
      "Users can opt in or out of allowing snippets to be used for product improvements",
      "Snippets are stored for exactly 30 days then deleted"
    ],
    correct: 2,
    explanation: "Copilot Individual users have the option to opt in or out of allowing their code snippets to be used for product improvements. This differs from Business/Enterprise where snippets are never retained."
  },

  // ═══════════════════════════════════════════
  // DOMAIN 3: How Copilot Works & Data (7 questions)
  // ═══════════════════════════════════════════
  {
    id: 14,
    domain: "Data Handling",
    question: "Which of the following does GitHub Copilot use as context when generating inline suggestions?",
    options: [
      "Only the current line of code",
      "The current file content, open tabs, file names, and cursor position",
      "The entire repository history including all branches",
      "All public repositories on GitHub in real-time"
    ],
    correct: 1,
    explanation: "Copilot gathers context from the current file, open editor tabs, file names/paths, and cursor position. It does not scan the entire repo history or access public repos in real-time."
  },
  {
    id: 15,
    domain: "Data Handling",
    question: "What is the correct order of the Copilot data pipeline for generating a suggestion?",
    options: [
      "Model generates → Editor sends context → User sees suggestion",
      "Editor collects context → Context sent to GitHub proxy → Proxy forwards to model → Suggestion returned to editor",
      "User types → GitHub searches public repos → Matching code returned",
      "Editor sends full repo → Model analyzes → Suggestion cached → User receives"
    ],
    correct: 1,
    explanation: "The pipeline is: editor collects context → sends via encrypted connection to GitHub's proxy → proxy forwards to the AI model → model generates suggestion → suggestion returned to editor. For Business/Enterprise, data is discarded after."
  },
  {
    id: 16,
    domain: "Data Handling",
    question: "A developer using Copilot Business is concerned about data retention. Which statement is TRUE?",
    options: [
      "Code snippets are retained for 90 days for quality assurance",
      "Code snippets are transmitted for suggestions but NOT retained after processing",
      "Only suggestions that are accepted are retained",
      "All code is stored in GitHub's training dataset permanently"
    ],
    correct: 1,
    explanation: "For Copilot Business and Enterprise, code snippets are transmitted to generate suggestions but are not retained after processing. They are also not used for model training."
  },
  {
    id: 17,
    domain: "Data Handling",
    question: "Why might Copilot suggest using an older version of a popular JavaScript framework?",
    options: [
      "Copilot always recommends the most stable version",
      "The model's training data has a cutoff date, so it may not know about newer releases",
      "Older versions are more secure",
      "Copilot is specifically configured to avoid bleeding-edge frameworks"
    ],
    correct: 1,
    explanation: "Copilot's model is trained on a snapshot of code at a point in time. Suggestions may not reflect the latest library versions or APIs released after the training cutoff — this is the 'age of code suggestions' concept."
  },
  {
    id: 18,
    domain: "Data Handling",
    question: "What does the 'context window' limitation mean for Copilot users?",
    options: [
      "Users can only have a certain number of editor windows open",
      "There is a maximum amount of text/tokens that can be sent to the model as input, affecting suggestion quality",
      "Copilot can only process code written in the last 24 hours",
      "The suggestion dropdown only shows a limited number of options"
    ],
    correct: 1,
    explanation: "The context window is the limited number of tokens the model can process. Copilot prioritizes the most relevant context from the current file and open tabs to fit within this window. Exceeding it means useful context may be dropped."
  },
  {
    id: 19,
    domain: "Data Handling",
    question: "Copilot suggests a code block that includes a hardcoded API key. What should the developer do?",
    options: [
      "Accept the suggestion since Copilot validated it",
      "Reject the suggestion and instead use environment variables or a secret management tool",
      "Accept and replace the key later before committing",
      "Report the suggestion as a Copilot bug"
    ],
    correct: 1,
    explanation: "Hardcoded secrets in code are a security risk. Developers should reject such suggestions and use environment variables or secret management tools instead. This is a known limitation — Copilot may suggest patterns it learned from training data that included hardcoded credentials."
  },
  {
    id: 20,
    domain: "Data Handling",
    question: "What is the 'most seen examples' effect in Copilot?",
    options: [
      "Copilot tracks which suggestions users accept most often",
      "Copilot tends to suggest patterns it encountered most frequently in training data, even if better alternatives exist",
      "The most popular GitHub repositories receive priority in Copilot's index",
      "Users who write the most code get better suggestions"
    ],
    correct: 1,
    explanation: "The 'most seen examples' effect means Copilot favors patterns that appeared most frequently in its training data. Popular but not necessarily optimal approaches get suggested more often than newer or superior alternatives."
  },

  // ═══════════════════════════════════════════
  // DOMAIN 4: Prompt Engineering (7 questions)
  // ═══════════════════════════════════════════
  {
    id: 21,
    domain: "Prompt Engineering",
    question: "Which function signature would produce the BEST Copilot suggestions?",
    options: [
      "function calc(a, b, c)",
      "function fn(x)",
      "function calculateMonthlyPayment(principal: number, rate: number, years: number): number",
      "function doStuff(data)"
    ],
    correct: 2,
    explanation: "Descriptive function names, typed parameters, and return types give Copilot strong signals about intended behavior. The more specific the signature, the more accurate and relevant the suggestions will be."
  },
  {
    id: 22,
    domain: "Prompt Engineering",
    question: "A developer wants Copilot to generate a function using the pandas library. Which approach is MOST effective?",
    options: [
      "Type 'use pandas' as a standalone comment at the bottom of the file",
      "Add `import pandas as pd` at the top and write a descriptive comment like '# Create a DataFrame from the CSV file'",
      "Name the file 'pandas_code.py' without any imports",
      "Write the function in JavaScript and ask Copilot to convert it"
    ],
    correct: 1,
    explanation: "Including the import statement and writing descriptive comments that reference the library gives Copilot strong signals about which library to use and what behavior is expected."
  },
  {
    id: 23,
    domain: "Prompt Engineering",
    question: "What is the 'neighboring tabs' technique?",
    options: [
      "Opening the same file in multiple browser tabs for comparison",
      "Keeping relevant files open in adjacent editor tabs to provide additional context to Copilot",
      "Using split-screen view to see Copilot suggestions side by side",
      "Opening GitHub documentation tabs while coding"
    ],
    correct: 1,
    explanation: "Copilot reads content from open editor tabs to gather additional context. Keeping related interfaces, models, types, or example files open helps Copilot generate more contextually appropriate suggestions."
  },
  {
    id: 24,
    domain: "Prompt Engineering",
    question: "What is the difference between 'zero-shot' and 'few-shot' prompting with Copilot?",
    options: [
      "Zero-shot uses no comments; few-shot uses many comments",
      "Zero-shot asks Copilot with just a description; few-shot provides examples of the desired pattern first",
      "Zero-shot generates one suggestion; few-shot generates multiple",
      "Zero-shot is free; few-shot requires Enterprise"
    ],
    correct: 1,
    explanation: "Zero-shot prompting provides only a description with no examples. Few-shot prompting includes one or more examples of the desired pattern before the target code. Few-shot generally produces more accurate and consistent results."
  },
  {
    id: 25,
    domain: "Prompt Engineering",
    question: "Why should developers keep the current file focused and clean when using Copilot?",
    options: [
      "Copilot charges per line of code scanned",
      "Irrelevant code dilutes the limited context window, reducing suggestion quality",
      "Copilot cannot process files larger than 100 lines",
      "Clean files are required by Copilot's terms of service"
    ],
    correct: 1,
    explanation: "Copilot's context window is limited. Irrelevant code, dead comments, or unused imports take up space that could be used for meaningful context, resulting in lower-quality suggestions."
  },
  {
    id: 26,
    domain: "Prompt Engineering",
    question: "A developer writes this comment before a function: `// Sort users by last name, case-insensitive, handle null values`. How does this help Copilot?",
    options: [
      "It doesn't help — Copilot ignores comments",
      "The comment acts as a natural language prompt that clearly specifies the expected behavior including edge cases",
      "Comments are only useful if written in the same language as the code",
      "This comment is too long and will confuse Copilot"
    ],
    correct: 1,
    explanation: "Descriptive comments serve as natural language prompts for Copilot. Specifying behavior, edge cases (null handling), and requirements (case-insensitive) gives Copilot clear directives for generating accurate code."
  },
  {
    id: 27,
    domain: "Prompt Engineering",
    question: "Which strategy BEST helps Copilot follow a specific algorithm within a function?",
    options: [
      "Write the entire algorithm in pseudocode as a single block comment",
      "Add step-by-step inline comments describing each part of the algorithm before each code section",
      "Write the algorithm in a different language first, then ask Copilot to translate",
      "Include a link to the algorithm's Wikipedia page"
    ],
    correct: 1,
    explanation: "Step-by-step inline comments guide Copilot through a specific algorithm sequentially. Each comment acts as a prompt for the next piece of code, ensuring Copilot follows the intended approach rather than guessing."
  },

  // ═══════════════════════════════════════════
  // DOMAIN 5: Developer Use Cases / Chat (11 questions)
  // ═══════════════════════════════════════════
  {
    id: 28,
    domain: "Copilot Chat",
    question: "Which slash command should you use to generate unit tests for a selected function in Copilot Chat?",
    options: [
      "/explain",
      "/fix",
      "/tests",
      "/optimize"
    ],
    correct: 2,
    explanation: "The /tests slash command is specifically designed to generate test cases for selected code. It uses the project's existing testing framework and conventions."
  },
  {
    id: 29,
    domain: "Copilot Chat",
    question: "What is the key difference between Copilot's inline suggestions and Copilot Chat?",
    options: [
      "Inline suggestions are free; Chat requires a paid plan",
      "Inline suggestions appear as ghost text for code completion; Chat is a conversational interface for questions, explanations, and multi-turn discussions",
      "Inline suggestions only work in Python; Chat works with all languages",
      "There is no difference — they use the same interface"
    ],
    correct: 1,
    explanation: "Inline suggestions appear as ghost text directly in the editor as you type. Copilot Chat is a separate conversational interface where you can ask questions, request explanations, debug, and have multi-turn conversations."
  },
  {
    id: 30,
    domain: "Copilot Chat",
    question: "What does the @workspace chat participant do in Copilot Chat?",
    options: [
      "Creates a new workspace/project from scratch",
      "Provides Copilot Chat with context about the entire project — not just the current file",
      "Opens a shared workspace for team collaboration",
      "Saves the current chat to the workspace folder"
    ],
    correct: 1,
    explanation: "@workspace gives Copilot Chat context about the entire project. Use it for questions about project structure, finding files, understanding component relationships, or planning changes that span multiple files."
  },
  {
    id: 31,
    domain: "Copilot Chat",
    question: "A developer pastes a stack trace into Copilot Chat and asks for help. Which approach is MOST effective?",
    options: [
      "Paste only the error message without the stack trace",
      "Select the error-producing code in the editor, paste the stack trace, and use /fix to get a targeted suggestion",
      "Ask Copilot Chat to search the internet for the error",
      "Close Chat and use inline suggestions instead"
    ],
    correct: 1,
    explanation: "Combining code selection with the stack trace and the /fix command gives Copilot Chat maximum context to understand the error and suggest an accurate fix."
  },
  {
    id: 32,
    domain: "Copilot Chat",
    question: "Which of the following is a limitation of GitHub Copilot Chat?",
    options: [
      "It can only respond in English",
      "It may hallucinate APIs or functions that don't actually exist",
      "It can only process files under 50 lines",
      "It requires an internet connection to display previous responses"
    ],
    correct: 1,
    explanation: "Copilot Chat can hallucinate — suggesting APIs, methods, or library functions that don't exist. It can also produce outdated solutions and cannot execute or test code directly. Always verify suggestions."
  },
  {
    id: 33,
    domain: "Copilot Chat",
    question: "How can Copilot Chat help identify potential security vulnerabilities?",
    options: [
      "It automatically blocks insecure code from being committed",
      "It can flag common issues like SQL injection, XSS, hardcoded secrets, and improper input validation when asked to review code",
      "It integrates with antivirus software to scan code",
      "It only checks for vulnerabilities in JavaScript files"
    ],
    correct: 1,
    explanation: "You can ask Copilot Chat to review code for security concerns. It can identify common vulnerabilities like SQL injection, XSS, hardcoded secrets, and insecure dependencies — though it should complement, not replace, dedicated security tools."
  },
  {
    id: 34,
    domain: "Copilot Chat",
    question: "What is GitHub Copilot Agent Mode?",
    options: [
      "A mode where Copilot monitors your repository 24/7",
      "An autonomous mode where Copilot can plan and execute multi-step tasks, create files, and run terminal commands",
      "A mode that lets Copilot access the internet for real-time information",
      "A premium feature that provides human expert review of Copilot suggestions"
    ],
    correct: 1,
    explanation: "Agent Mode allows Copilot to autonomously plan and execute multi-step coding tasks. It can create files, run terminal commands, iterate on errors, and complete complex workflows — acting as an autonomous pair programmer."
  },
  {
    id: 35,
    domain: "Copilot Chat",
    question: "How should a developer provide feedback on a poor Copilot Chat response?",
    options: [
      "File a GitHub support ticket for each bad response",
      "Use the thumbs up/down buttons on individual chat responses",
      "Post about it on social media",
      "There is no way to provide feedback"
    ],
    correct: 1,
    explanation: "The thumbs up/down buttons on individual responses let you rate quality quickly. This feedback helps GitHub improve the model. You can also file feedback through official GitHub channels."
  },
  {
    id: 36,
    domain: "Copilot Chat",
    question: "Which chat participant would you use to get help with VS Code-specific commands and settings?",
    options: [
      "@workspace",
      "@vscode",
      "@terminal",
      "@github"
    ],
    correct: 1,
    explanation: "@vscode is the chat participant for VS Code-specific questions about settings, commands, extensions, and editor configuration. @workspace is for project context, and @terminal is for shell commands."
  },
  {
    id: 37,
    domain: "Copilot Chat",
    question: "A developer wants Copilot to refactor a function to reduce complexity. Which is the BEST approach?",
    options: [
      "Delete the function and let Copilot write a new one from scratch",
      "Select the function, open Copilot Chat, and ask it to refactor — specifying goals like extracting helper functions or reducing nesting",
      "Add a comment saying 'refactor this' above the function",
      "Copy the function to a new file and let Copilot improve it automatically"
    ],
    correct: 1,
    explanation: "Selecting code and using Copilot Chat with specific refactoring goals gives the best results. Being explicit about what you want (extract functions, reduce complexity, improve naming) guides Copilot toward the desired outcome."
  },
  {
    id: 38,
    domain: "Copilot Chat",
    question: "How can Copilot Chat be used on GitHub.com?",
    options: [
      "It cannot — Chat is only available in desktop IDEs",
      "By installing a browser extension",
      "Directly on GitHub.com to ask questions about repositories, understand PRs, and navigate codebases",
      "Only through GitHub Actions workflows"
    ],
    correct: 2,
    explanation: "Copilot Chat is available directly on GitHub.com. Users can ask questions about repos, get code explanations, and understand pull requests. Enterprise users also get PR summaries and knowledge base access in the browser."
  },

  // ═══════════════════════════════════════════
  // DOMAIN 6: Testing (5 questions)
  // ═══════════════════════════════════════════
  {
    id: 39,
    domain: "Testing",
    question: "What is the MOST effective way to generate unit tests with Copilot?",
    options: [
      "Write 'generate tests' in a new empty file",
      "Select the target function, use /tests in Chat, and have your project's test framework already set up",
      "Ask Copilot Chat to write tests without selecting any code",
      "Let Copilot auto-generate tests on every save"
    ],
    correct: 1,
    explanation: "Selecting the specific function and using /tests gives Copilot targeted context. Having your testing framework (Jest, pytest, JUnit, etc.) already in the project helps Copilot match your conventions."
  },
  {
    id: 40,
    domain: "Testing",
    question: "How does Copilot assist with identifying edge cases?",
    options: [
      "It runs the code automatically and finds failures",
      "It can suggest boundary values, null inputs, empty collections, overflow scenarios, and type coercion issues based on the function's signature",
      "It only identifies edge cases for Python functions",
      "It requires a paid plugin to identify edge cases"
    ],
    correct: 1,
    explanation: "Copilot can analyze a function's signature and logic to suggest relevant edge cases: boundary values, null/undefined, empty collections, negative numbers, overflow, concurrency issues, and type coercion problems."
  },
  {
    id: 41,
    domain: "Testing",
    question: "A project uses Mocha with Chai assertions. How does this affect Copilot's test generation?",
    options: [
      "It doesn't — Copilot always generates Jest tests",
      "Copilot uses the project's existing test files as context and will match the Mocha/Chai patterns",
      "You must explicitly tell Copilot to use Mocha in every prompt",
      "Copilot cannot generate tests for Mocha projects"
    ],
    correct: 1,
    explanation: "Copilot uses open tabs and project context to match existing patterns. If your project already has Mocha/Chai test files, Copilot will follow the same assertion style, setup/teardown patterns, and conventions."
  },
  {
    id: 42,
    domain: "Testing",
    question: "Which types of tests can GitHub Copilot help generate?",
    options: [
      "Only unit tests",
      "Unit tests, integration tests, end-to-end scaffolds, API tests, snapshot tests, and mock setups",
      "Only tests for JavaScript and Python",
      "Only tests that don't require external dependencies"
    ],
    correct: 1,
    explanation: "Copilot can help with unit tests, integration tests, E2E scaffolds, API tests, snapshot tests, property-based tests, and mock/stub setups. It's most effective with unit tests where input/output is clear."
  },
  {
    id: 43,
    domain: "Testing",
    question: "What is the biggest risk when using Copilot-generated tests without review?",
    options: [
      "Tests may be too slow to run",
      "Tests may pass but not actually validate the correct behavior (false confidence)",
      "Tests will always fail on the first run",
      "Generated tests cannot be used in CI/CD pipelines"
    ],
    correct: 1,
    explanation: "The biggest risk is tests that pass but don't meaningfully validate behavior — giving false confidence. Copilot may write trivial happy-path tests or assertions that don't test the right thing. Always review generated tests for correctness."
  },

  // ═══════════════════════════════════════════
  // DOMAIN 7: Privacy & Content Exclusions (7 questions)
  // ═══════════════════════════════════════════
  {
    id: 44,
    domain: "Privacy & Exclusions",
    question: "What happens when a file matches a content exclusion rule in Copilot?",
    options: [
      "The file is deleted from the repository",
      "Copilot provides suggestions but marks them as 'unverified'",
      "Copilot won't provide suggestions in that file, and the file's content won't be used as context for other files",
      "The file is automatically encrypted"
    ],
    correct: 2,
    explanation: "Content exclusions prevent Copilot from providing suggestions in matching files AND prevent those files from being used as context for suggestions in other files. Users may see a notification that Copilot is disabled for the file."
  },
  {
    id: 45,
    domain: "Privacy & Exclusions",
    question: "How are content exclusions configured for GitHub Copilot?",
    options: [
      "By adding a .copilotignore file to each repository",
      "By organization owners in the Copilot settings at the org level using path patterns",
      "By each individual developer in their IDE settings",
      "By GitHub support upon request"
    ],
    correct: 1,
    explanation: "Organization owners configure exclusions in the Copilot settings at the org level using path patterns similar to .gitignore syntax. They can exclude specific repositories or file paths."
  },
  {
    id: 46,
    domain: "Privacy & Exclusions",
    question: "What do Copilot Business audit logs track?",
    options: [
      "Only the number of suggestions generated per day",
      "Events like suggestion acceptance/rejection, policy changes, seat assignments, and content exclusion modifications",
      "Only login and logout events",
      "The exact code content of every suggestion"
    ],
    correct: 1,
    explanation: "Audit logs track Copilot-related events including suggestion interactions, policy changes, seat assignments, and exclusion modifications. They help organizations monitor usage and ensure compliance."
  },
  {
    id: 47,
    domain: "Privacy & Exclusions",
    question: "How can an organization automate Copilot seat management?",
    options: [
      "Automation is not possible — seats must be managed manually",
      "Through the GitHub REST API, which allows listing seats, adding/removing assignments, and retrieving usage metrics",
      "By emailing GitHub support with a spreadsheet",
      "Through a dedicated Copilot desktop application"
    ],
    correct: 1,
    explanation: "The GitHub REST API enables automated seat management: listing seats, adding/removing assignments, checking status, and retrieving metrics. This integrates with identity providers for streamlined management."
  },
  {
    id: 48,
    domain: "Privacy & Exclusions",
    question: "For Copilot Business, how is data protected during transmission?",
    options: [
      "Data is sent as plain text for speed",
      "Data is encrypted via HTTPS, not retained after processing, and not used for model training",
      "Data is only encrypted if the user enables a premium security addon",
      "Data is sent to a local model on the user's machine with no transmission"
    ],
    correct: 1,
    explanation: "Copilot transmits context via encrypted HTTPS connections. For Business/Enterprise, data is not retained after generating suggestions and is not used for model training. GitHub acts as a data processor under data protection regulations."
  },
  {
    id: 49,
    domain: "Privacy & Exclusions",
    question: "An organization wants to stream Copilot audit log events to their SIEM tool. Is this possible?",
    options: [
      "No, audit logs can only be viewed on GitHub.com",
      "Yes, audit logs can be accessed via the REST API and streamed to external SIEM tools",
      "Only with Copilot Individual",
      "Yes, but only for repositories with fewer than 100 contributors"
    ],
    correct: 1,
    explanation: "Copilot audit log events can be accessed via the REST API and streamed to SIEM tools for centralized security monitoring and compliance reporting."
  },
  {
    id: 50,
    domain: "Privacy & Exclusions",
    question: "A healthcare company wants to use Copilot but must ensure patient data in code files is never sent to the model. What is the recommended approach?",
    options: [
      "Don't use Copilot at all",
      "Configure content exclusion rules for all directories and repositories containing patient data",
      "Ask developers to pause Copilot manually when working on sensitive files",
      "Use Copilot Individual since it has better privacy controls than Business"
    ],
    correct: 1,
    explanation: "Content exclusion rules are the recommended approach. Admins can exclude specific directories/repos containing sensitive data, ensuring that content is never sent as context. This is more reliable than manual developer action."
  }
];

export default questions;
