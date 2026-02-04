## SDET Technical Challenge – Shady Meadows B&B

### Approach
- API tests implemented with Karate DSL
- UI tests implemented with Playwright using Page Object Model
- Tests are atomic and environment-independent

### Reporting
- Karate: target/karate-reports/karate-summary.html
- Playwright: npx playwright show-report

### Playwright (UI Tests)
To run tests and view the visual HTML report:
cd ui-tests
npm run test
npm run report

### Karate (API Tests)
- cd api-tests
- mvn test

### CI/CD
- GitHub Actions pipeline executes API and UI tests on each push

### Notes
- Dynamic data handled via helper features
- User-facing locators preferred in UI tests
