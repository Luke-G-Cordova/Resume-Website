import Navbar from '@/components/navbar';
import styles from '@/components/styles/navbar.module.css';

const links: Paths[] = ['/terminal', '/', '/about', '/socials'];

describe('<Navbar />', () => {
  it('tests links', () => {
    cy.viewport(1440, 800);
    cy.mount(<Navbar currentPath="/" />);

    // ensure the 'current' class is only on one element and has a link to "/"
    cy.get(`[cy-data="navTab"] > div.${styles.current}`)
      .should('have.length', 1)
      .find('a[href="/"]')
      .should('be.visible');

    // test all links
    cy.get('[cy-data="navTab"]').each((tab, i) => {
      cy.wrap(tab).find('div > a').should('have.attr', 'href', links[i]);
    });
  });
  it('tests props', () => {
    cy.viewport(1440, 800);
    cy.mount(<Navbar currentPath="/terminal" />);

    cy.get(`[cy-data="navTab"] > div.${styles.current}`)
      .should('have.length', 1)
      .find('a[href="/terminal"]')
      .should('be.visible');
  });
});
