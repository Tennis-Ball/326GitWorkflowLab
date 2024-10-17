# COMPSCI 326 Git Workflow Lab

## Lab Description

This project considers the topic of real-world collaboration workflows in git
and GitHub for software development in agile teams. Components of collaboration
workflows that will be touched upon include development branches, production
branches, feature branches, pull requests, code reviews, and ticket tracking.
While there are discrete workflows that teams follow, it is also important to
emphasize that standard workflow definitions are completely up to the individual
teams/companies. These standards are, in fact, most often altered to better fit
the work environment at hand. The presented workflow components serve as a
foundation for learning how to customize the optimal workflow for a development
team.

## Intended learning outcomes (ILOs)

Students are expected to distinguish between different types of workflows for
managing a git repository and know how to deal with merge conflicts. They will
also learn how to communicate with other team members in a git setting to get
changes implemented and pushed. They’ll understand the importance of tests in
ensuring the production branch is reliably functional.

## Features

- Basic arithmetic operations: `+`, `-`, `*`, `/`
- Clear (`Clear`) and delete last character (`Del`) buttons
- Memory storage (`Store`), memory recall (`Recall`), and memory clear (`Reset`)
  functionality
- Error handling for invalid inputs

### Implemented Features:

- [x] Display for calculator operations
- [x] Basic arithmetic functions
- [x] Clear and Delete buttons

### TODO Features:

- [x] Implement square root function
- [x] Implement square function
- [x] Add keyboard support for number input
- [x] Improve the design (CSS styling)
- [x] Memory Store (`MS`), Recall (`MR`), and Clear (`MC`)

### Bugs:
- [x] Fix reciprocal function

## Roadmap

The goal of this project is to create a fully functioning and visually appealing
JavaScript calculator, while encouraging contributions and learning. Below is
the roadmap for future improvements and features:

1. **Basic Calculator Expansion**:
   - [x] Implement scientific calculator functions like square root, square, and
         reciprocal.
   - [x] Add more advanced memory functions, such as memory addition and
         subtraction (`M+`, `M-`).

2. **UI/UX Improvements**:
   - [x] Design a more user-friendly and modern UI.
   - [x] Add responsiveness for mobile devices.

3. **Input & Error Handling**:
   - [ ] Enable keyboard input for numbers and operations.
   - [ ] Improve error handling with better feedback for the user.

4. **Testing**:
   - [ ] Add unit tests for core functions.
   - [ ] Implement end-to-end tests for UI and functionality.

5. **Documentation**:
   - [ ] Write detailed function explanations for new features.
   - [ ] Create usage examples in the `README`.

## How to Set Up The Lab

1. Fork the template
2. Add all contributing TAs to the list of repository contributors
3. Create ticket in Issue's tab
4. Clone your fork:
   ```bash
   git clone https://github.com/your-username/js-calculator.git
   ```
5. Create a new branch with name matching corresponding issue:
   ```bash
   git checkout -b feature/my-feature
   ```

6. Make your changes and commit them:
7. Push your changes to your fork:
   ```bash
   git push origin feature/my-feature
   ```

## Presentation Instructions

Two TAs will present this lab case study to a group of students. If presented on Zoom, the TAs will take turns sharing their screens presenting the steps they are taking in the following workflow:

1. (TA #1) Select 2 issues from the list above and create corresponding GitHub issues. Include descriptions, tags, and assignments in the issues. Assing one issue to yourself and one issue to the other TA.
2. (TA #1) Create the branch corresponding to the issue assigned to yourself. Make and push any changes to complete the issue. Don't forget about adding and running tests in the tests file. Create a pull request for the branch and assign the TA #2 as a reviewer.
3. (TA #2) Create the branch corresponding to the issue assigned to yourself. Make and push any changes to complete the issue. Don't forget about adding and running tests in the tests file. Create a pull request for the branch and assign the TA #1 as a reviewer.
4. (TA #2) Review the PR from TA #1 and create any necessary comments.
5. (TA #1) Respond to the TA #1 comments and make any additional commits to fix the changes.
6. (TA #1) Take a look at TA #2's PR, and approve/merge it if everything looks good.
7. (TA #2) Approve/merge TA #1's PR.
