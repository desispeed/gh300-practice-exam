# GitHub Foundations (GH-300) Exam Study Guide

## Exam Overview
- **Duration**: 120 minutes
- **Questions**: 75 multiple choice questions
- **Passing Score**: 70%
- **Cost**: $99 USD
- **Validity**: 3 years

---

## Domain 1: Introduction to Git and GitHub (15%)

### Key Concepts

#### Version Control Systems
- **What is Version Control?**
  - System that records changes to files over time
  - Allows you to recall specific versions later
  - Tracks who made changes and when

- **Types of Version Control**
  - Local VCS: Database on your hard disk
  - Centralized VCS (CVCS): Single server contains all versioned files
  - Distributed VCS (DVCS): Clients fully mirror the repository

#### Git Basics
- **What is Git?**
  - Distributed version control system
  - Created by Linus Torvalds in 2005
  - Tracks changes in source code during software development

- **Git Characteristics**
  - Speed and efficiency
  - Distributed development
  - Data integrity (checksums)
  - Branching and merging
  - Staging area

#### GitHub Fundamentals
- **What is GitHub?**
  - Cloud-based hosting service for Git repositories
  - Collaboration platform for developers
  - Social coding features

- **GitHub Features**
  - Remote repository hosting
  - Pull requests
  - Issues and project management
  - GitHub Actions (CI/CD)
  - GitHub Pages (static site hosting)
  - Security features (Dependabot, CodeQL)

#### Git vs GitHub
- Git is the version control tool
- GitHub is the hosting platform for Git repositories
- Can use Git without GitHub, but not vice versa

---

## Domain 2: Working with GitHub Repositories (20%)

### Repository Basics

#### Creating Repositories
- **Initialize a new repository**
  - `git init` - Create local repository
  - GitHub UI - Create remote repository
  - Template repositories for quick setup

- **Cloning Repositories**
  - `git clone <url>` - Copy remote repository locally
  - HTTPS vs SSH protocols
  - Shallow clones vs full clones

#### Repository Structure
- **.git directory**: Contains all version control information
- **Working directory**: Where you modify files
- **Staging area (index)**: Prepared changes for next commit
- **README.md**: Project documentation
- **LICENSE**: Software license
- **.gitignore**: Files to ignore

#### README Files
- First file users see in your repository
- Written in Markdown
- Should include:
  - Project description
  - Installation instructions
  - Usage examples
  - Contributing guidelines
  - License information

#### .gitignore
- Specifies intentionally untracked files
- Patterns to exclude files/directories
- Common examples:
  - `node_modules/`
  - `*.log`
  - `.env`
  - Build directories

### Working with Files

#### Basic Git Commands
```bash
# Configuration
git config --global user.name "Your Name"
git config --global user.email "your@email.com"

# Status and Changes
git status              # Check repository status
git diff                # Show unstaged changes
git diff --staged       # Show staged changes

# Adding and Committing
git add <file>          # Stage specific file
git add .               # Stage all changes
git commit -m "message" # Commit with message
git commit -am "msg"    # Add and commit tracked files

# History
git log                 # Show commit history
git log --oneline       # Compact log view
git log --graph         # Show branch graph

# Remote Operations
git remote add origin <url>  # Add remote
git push origin main         # Push to remote
git pull origin main         # Pull from remote
git fetch origin             # Fetch without merging
```

#### Commit Best Practices
- Write clear, descriptive commit messages
- Use imperative mood ("Add feature" not "Added feature")
- Keep commits atomic (one logical change per commit)
- Commit often
- Format: Short summary (50 chars), blank line, detailed description

---

## Domain 3: Collaboration Features (25%)

### Branching and Merging

#### Branch Basics
- **What is a Branch?**
  - Lightweight movable pointer to a commit
  - Allows parallel development
  - Default branch: main (formerly master)

- **Branch Commands**
  ```bash
  git branch              # List branches
  git branch <name>       # Create branch
  git checkout <name>     # Switch branch
  git switch <name>       # Modern switch command
  git checkout -b <name>  # Create and switch
  git branch -d <name>    # Delete branch
  git branch -m <new>     # Rename current branch
  ```

#### Merge Strategies
- **Fast-forward merge**: Linear history, no merge commit
- **Three-way merge**: Creates merge commit
- **Squash merge**: Combines commits into one
- **Rebase**: Reapply commits on top of another base

#### Merge Conflicts
- Occur when same part of file modified in different branches
- Git marks conflicts in files with markers:
  ```
  <<<<<<< HEAD
  Your changes
  =======
  Their changes
  >>>>>>> branch-name
  ```
- Resolution steps:
  1. Identify conflicts (`git status`)
  2. Edit files to resolve
  3. Remove conflict markers
  4. Stage resolved files (`git add`)
  5. Complete merge (`git commit`)

### Pull Requests (PRs)

#### What is a Pull Request?
- Proposal to merge changes from one branch to another
- Enables code review and discussion
- Central to collaborative development on GitHub

#### Creating Pull Requests
- From GitHub UI or CLI (`gh pr create`)
- Requires:
  - Source branch (your changes)
  - Target branch (where to merge)
  - Title and description
  - Optional: Reviewers, assignees, labels

#### PR Best Practices
- Keep PRs small and focused
- Write descriptive titles and descriptions
- Link to related issues
- Request appropriate reviewers
- Respond to feedback promptly
- Keep PR up to date with target branch

#### Code Review
- Review code for quality, bugs, style
- Leave constructive comments
- Approve, request changes, or comment
- Can suggest specific code changes
- Resolve conversations when addressed

#### PR Workflow
1. Create feature branch
2. Make changes and commit
3. Push branch to GitHub
4. Open pull request
5. Code review and discussion
6. Address feedback
7. Merge when approved
8. Delete feature branch

### Issues and Project Management

#### GitHub Issues
- Track bugs, enhancements, tasks
- Components:
  - Title and description
  - Labels (categorization)
  - Milestones (group related issues)
  - Assignees (who's working on it)
  - Projects (kanban boards)

#### Issue Management
- Templates for consistency
- Closing issues with commits: "Fixes #123"
- Cross-referencing: `#issue-number`
- Labels: bug, enhancement, documentation, etc.
- Milestones for release planning

#### GitHub Projects
- Kanban-style project boards
- Automate workflow with automation rules
- Track progress across repositories
- Organize issues and PRs

### Forking and Contributing

#### Forking
- Personal copy of someone else's repository
- Allows experimentation without affecting original
- Fork → Clone → Modify → Push → Pull Request

#### Contribution Workflow
1. Fork the repository
2. Clone your fork locally
3. Create feature branch
4. Make changes and commit
5. Push to your fork
6. Create pull request to original repo
7. Collaborate with maintainers

#### Keeping Fork Updated
```bash
# Add upstream remote
git remote add upstream <original-repo-url>

# Fetch upstream changes
git fetch upstream

# Merge upstream changes
git checkout main
git merge upstream/main
git push origin main
```

---

## Domain 4: Modern Development (20%)

### GitHub Actions

#### What is GitHub Actions?
- CI/CD platform integrated into GitHub
- Automate workflows triggered by GitHub events
- Build, test, and deploy code

#### Key Concepts
- **Workflows**: Automated processes defined in YAML
- **Events**: Triggers that start workflows (push, pull_request, schedule)
- **Jobs**: Set of steps executed on same runner
- **Steps**: Individual tasks (run commands or actions)
- **Actions**: Reusable units of code
- **Runners**: Servers that execute workflows

#### Workflow Syntax
```yaml
name: CI
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run tests
        run: npm test
```

#### Common Use Cases
- Continuous Integration (CI)
- Continuous Deployment (CD)
- Automated testing
- Code linting and formatting
- Security scanning
- Release automation

### GitHub Codespaces

#### What is Codespaces?
- Cloud-based development environment
- Fully configured dev environment in minutes
- Access from browser or VS Code
- Based on containers

#### Benefits
- Consistent development environment
- No local setup required
- Powerful cloud resources
- Prebuilt environments

### GitHub Copilot

#### What is GitHub Copilot?
- AI-powered code completion tool
- Suggests code and entire functions
- Powered by OpenAI Codex
- Trained on public code repositories

#### Features
- Real-time code suggestions
- Multi-language support
- Context-aware completions
- Comment-to-code generation

---

## Domain 5: Project Management (10%)

### GitHub Projects
- Visual project management
- Customizable views (table, board, roadmap)
- Automation capabilities
- Integration with issues and PRs

### Milestones
- Group related issues and PRs
- Track progress toward releases
- Set due dates
- Monitor completion percentage

### Labels
- Categorize and filter issues/PRs
- Color-coded for visibility
- Default labels: bug, enhancement, documentation
- Custom labels for specific needs

### Assignees and Reviewers
- Assign issues to specific people
- Request PR reviews from team members
- Track responsibility and workload

---

## Domain 6: Privacy, Security, and Administration (15%)

### Authentication

#### Authentication Methods
- **HTTPS**: Username/password or personal access token
- **SSH**: Public/private key pair
- **GitHub CLI**: OAuth token
- **Personal Access Tokens (PAT)**:
  - Classic tokens
  - Fine-grained tokens (beta)
  - Used instead of passwords
  - Can be scoped to specific permissions

#### Two-Factor Authentication (2FA)
- Adds extra security layer
- TOTP apps or SMS
- Required for enterprise organizations
- Recovery codes for backup

### Repository Security

#### Branch Protection
- Require pull request reviews
- Require status checks before merging
- Require signed commits
- Restrict who can push
- Require linear history
- Include administrators in restrictions

#### Code Scanning
- Automated vulnerability detection
- Powered by CodeQL
- Scans code for security issues
- Integration with GitHub Actions
- Results shown in Security tab

#### Dependabot
- **Dependabot Alerts**: Notifies about vulnerable dependencies
- **Dependabot Security Updates**: Automatically creates PRs to fix vulnerabilities
- **Dependabot Version Updates**: Keeps dependencies up to date

#### Secret Scanning
- Detects committed secrets (API keys, tokens)
- Prevents credential leaks
- Partner patterns for common services
- Custom patterns available

### Repository Permissions

#### Permission Levels
- **Read**: View and clone
- **Triage**: Manage issues and PRs without write access
- **Write**: Push to repository
- **Maintain**: Manage repository settings
- **Admin**: Full access including security and deletion

#### Collaborators
- Add collaborators to private repos
- Assign permission levels
- Team-based access in organizations

### Organization Management

#### Organizations
- Shared ownership of repositories
- Team-based access control
- Enhanced security features
- Billing and policy management

#### Teams
- Groups of organization members
- Nested teams (parent/child)
- Assign repository access by team
- Mention teams with `@org/team`

---

## Domain 7: Benefits of the GitHub Community (10%)

### GitHub Community

#### Open Source
- Public repositories are free
- Contribute to open source projects
- Learn from others' code
- Build your portfolio

#### GitHub Discussions
- Community forum for repositories
- Q&A, announcements, ideas
- Alternative to issues for conversations
- Organized by categories

#### GitHub Sponsors
- Financial support for developers
- One-time or recurring sponsorships
- Support open source maintainers

#### GitHub Marketplace
- Discover and install apps/actions
- Extend GitHub functionality
- Free and paid apps available

#### GitHub Learning Lab
- Interactive tutorials
- Learn Git, GitHub, and DevOps
- Hands-on courses
- Badges and certificates

### Social Features

#### Following Users
- See their activity in your feed
- Discover interesting projects
- Network with developers

#### Starring Repositories
- Bookmark interesting projects
- Show appreciation
- Topics and trending repositories

#### Watching Repositories
- Get notifications for activity
- Choose notification level
- Stay updated on projects

---

## Exam Tips and Strategies

### Preparation Tips
1. **Practice hands-on**: Use Git and GitHub regularly
2. **Review documentation**: GitHub Docs are comprehensive
3. **Take practice exams**: Familiarize with question format
4. **Understand concepts**: Don't just memorize commands
5. **Join GitHub community**: Learn from others
6. **Watch GitHub YouTube**: Official tutorials and features

### During the Exam
1. **Read questions carefully**: Look for keywords
2. **Eliminate wrong answers**: Narrow down choices
3. **Manage time**: Don't spend too long on one question
4. **Flag uncertain questions**: Review them later
5. **Trust your knowledge**: First instinct often correct
6. **Stay calm**: Take deep breaths if stressed

### Key Topics to Master
- [ ] Git basics and commands
- [ ] Repository management
- [ ] Branching and merging
- [ ] Pull requests and code review
- [ ] GitHub Actions fundamentals
- [ ] Security features (Dependabot, secret scanning)
- [ ] Collaboration workflows
- [ ] Organization and team management
- [ ] Best practices and conventions

---

## Additional Resources

### Official Documentation
- [GitHub Docs](https://docs.github.com)
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Skills](https://skills.github.com)
- [GitHub Certifications](https://examregistration.github.com)

### Practice Resources
- [GitHub Learning Lab](https://lab.github.com)
- [Git Immersion](http://gitimmersion.com)
- [Atlassian Git Tutorial](https://www.atlassian.com/git/tutorials)
- [Oh My Git!](https://ohmygit.org) - Game to learn Git

### GitHub CLI
```bash
# Install GitHub CLI
brew install gh  # macOS
winget install --id GitHub.cli  # Windows

# Common commands
gh auth login
gh repo create
gh pr create
gh pr list
gh issue create
gh issue list
```

---

## Common Git/GitHub Scenarios

### Undo Changes
```bash
# Discard unstaged changes
git checkout -- <file>
git restore <file>

# Unstage file
git reset HEAD <file>
git restore --staged <file>

# Amend last commit
git commit --amend

# Revert commit (creates new commit)
git revert <commit-hash>

# Reset to previous commit (destructive)
git reset --hard <commit-hash>
```

### Working with Remotes
```bash
# View remotes
git remote -v

# Add remote
git remote add <name> <url>

# Change remote URL
git remote set-url <name> <new-url>

# Remove remote
git remote remove <name>

# Fetch from remote
git fetch <remote>

# Pull with rebase
git pull --rebase origin main
```

### Stashing
```bash
# Save changes temporarily
git stash

# List stashes
git stash list

# Apply most recent stash
git stash apply

# Apply and remove stash
git stash pop

# Drop stash
git stash drop

# Stash with message
git stash save "work in progress"
```

---

## Glossary

**Repository (Repo)**: Collection of files and their revision history

**Commit**: Snapshot of your repository at a specific point in time

**Branch**: Parallel version of repository

**Merge**: Combine changes from different branches

**Pull Request**: Proposal to merge code changes

**Fork**: Personal copy of another user's repository

**Clone**: Local copy of a remote repository

**Push**: Send local commits to remote repository

**Pull**: Fetch and merge changes from remote repository

**Fetch**: Download objects and refs from remote repository

**Remote**: Repository hosted on the internet or network

**Origin**: Default name for remote repository

**HEAD**: Pointer to current branch reference

**Master/Main**: Default branch name

**Staging Area**: Prepare commits before finalizing

**Working Directory**: Current state of files you're working on

**Conflict**: When Git can't automatically merge changes

**.gitignore**: File specifying what Git should ignore

**SHA/Hash**: Unique identifier for commits

**Tag**: Named reference to specific commit (usually for releases)

---

## Quick Reference Commands

```bash
# Configuration
git config --list
git config --global core.editor "code --wait"

# Repository Setup
git init
git clone <url>

# Basic Workflow
git status
git add <file>
git commit -m "message"
git push origin main
git pull origin main

# Branching
git branch <name>
git checkout <name>
git switch <name>
git merge <branch>
git branch -d <name>

# History
git log
git log --oneline --graph --all
git show <commit>
git diff

# Undo
git restore <file>
git reset HEAD <file>
git revert <commit>

# Remote
git remote add origin <url>
git remote -v
git fetch origin
git push -u origin main

# GitHub CLI
gh repo create
gh pr create
gh pr list
gh pr merge
gh issue create
gh issue list
```

---

## Study Checklist

- [ ] Understand difference between Git and GitHub
- [ ] Know basic Git commands (add, commit, push, pull)
- [ ] Understand branching and merging strategies
- [ ] Can create and manage pull requests
- [ ] Know how to resolve merge conflicts
- [ ] Understand GitHub Actions basics
- [ ] Familiar with repository security features
- [ ] Know different permission levels
- [ ] Understand organization and team structure
- [ ] Can use GitHub CLI
- [ ] Know about GitHub community features
- [ ] Understand Codespaces and Copilot
- [ ] Familiar with GitHub Projects and Issues
- [ ] Know authentication methods (HTTPS, SSH, PAT)
- [ ] Understand branch protection rules
- [ ] Familiar with Dependabot and secret scanning

---

**Good luck on your GitHub Foundations (GH-300) exam!** 🚀
