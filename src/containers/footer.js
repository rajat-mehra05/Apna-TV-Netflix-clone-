import React from "react";
import Footer from "../components/footer";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>
        This website is replica of Netflix, created for practice purposes.{" "}
        <br />
        <br />
        No API is being used in this site.
        <br />
        <br />
        For each series or movie, only one video will be played.
      </Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href="#">FAQ</Footer.Link>
          <Footer.Link href="#">Investor Relations</Footer.Link>
          <Footer.Link href="#">Ways to Watch</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Help Centre</Footer.Link>
          <Footer.Link href="#">Jobs</Footer.Link>
          <Footer.Link href="#">Terms of Use</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Account</Footer.Link>
          <Footer.Link href="#">Redeem gift cards</Footer.Link>
          <Footer.Link href="#">Privacy</Footer.Link>
          <Footer.Link href="#">Speed Test</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="https://twitter.com/_rajat_mehra_" target="_blank">
            Contact Me
          </Footer.Link>
          <Footer.Link href="https://twitter.com/_rajat_mehra_" target="_blank">
            Twitter
          </Footer.Link>
          <Footer.Link
            href="https://www.linkedin.com/in/rajat-mehra-/"
            target="_blank"
          >
            LinkedIn
          </Footer.Link>
          <Footer.Link href="https://github.com/rajat-mehra05" target="_blank">
            GitHub
          </Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Break />
      <Footer.Text>अपना TV India</Footer.Text>
    </Footer>
  );
}
