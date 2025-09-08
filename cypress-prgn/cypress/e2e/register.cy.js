describe('Register Scenarios', () => {
  const baseUrl = "https://recruitment-staging-queenbee.paradev.io";
  it('Register', () => {
  cy.get('body').click(100, 200);

  cy.contains("Daftar").click();

  cy.get('input[name="fullname"]').type("Akun Contoh");
  cy.get('input[name="phone"]').type("081234567890");
  cy.get('input[name="email"]').type("akuncontoh" + Date.now() + "@gmail.com");
  cy.get('input[name="password"]').type("Password123!");
  cy.contains("Daftar").click();
});
