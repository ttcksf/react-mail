import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

interface NotionMagicLinkEmailProps {
  loginCode?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";
// https://react.email
// npm iでnode_moduleをインポート
// npm run devで実行
// コンポーネントを作り替える
const Email = () => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-white">
          <Container className="p-8 shadow-lg">
            <Heading className="text-lg pt-4">
              メルマガ購読者の方へお知らせ
            </Heading>
            <Text className="text-md font-medium text-gray-700">
              ブログ記事を更新しました。
              <br />
              今回はReactでメールのテンプレートを作る方法を紹介しています。
              <br />
              ぜひご覧ください。
            </Text>
            <Button
              className="bg-purple-400 text-white font-bold p-4 rounded-md mb-12"
              href="https://lorem-co-ltd.com"
            >
              記事はこちら
            </Button>
            {/* .react-mail/staticに画像を保存 */}
            <Img
              src={`${baseUrl}/static/channel-banner.png`}
              width="100%"
              height="auto"
            />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default Email;

const main = {
  backgroundColor: "#ffffff",
};

const container = {
  paddingLeft: "12px",
  paddingRight: "12px",
  margin: "0 auto",
};

const h1 = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
};

const link = {
  color: "#2754C5",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  textDecoration: "underline",
};

const text = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  margin: "24px 0",
};

const footer = {
  color: "#898989",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "12px",
  lineHeight: "22px",
  marginTop: "12px",
  marginBottom: "24px",
};

const code = {
  display: "inline-block",
  padding: "16px 4.5%",
  width: "90.5%",
  backgroundColor: "#f4f4f4",
  borderRadius: "5px",
  border: "1px solid #eee",
  color: "#333",
};
