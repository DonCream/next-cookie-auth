import Document, { Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
 static async getInitialProps(ctx) {
  const props = await Document.getInitialProps(ctx);
  const userData = await getServerSideToken(ctx.req);

  return {...props, ...userData}
 }
 
 
 render() {
  return (
   <html>
    <Head />
    <body>
     <Main />
     <NextScript />
    </body>
   </html>
  );
 }
}

export default MyDocument;
