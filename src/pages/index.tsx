import { NextPage } from 'next';
import { useEffect } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { PAGE_URL } from '@/constants';

interface Props {
  userAgent: string;
}

/** ホーム */
const HomePage: NextPage<Props> = (props) => {
  const { userAgent } = props;

  useEffect(() => console.log('User Agent:', userAgent), []);

  return (
    <Container>
      <Title>本棚</Title>
      <Contents>
        <Link href={PAGE_URL.BOOKS}>
          <LinkText>書籍一覧</LinkText>
        </Link>
      </Contents>
    </Container>
  );
};

export default HomePage;

HomePage.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return { userAgent };
};

// style
const Container = styled.div`
  position: absolute;
  top: 40vh;
  width: 100%;
`;
const Title = styled.h1``;
const Contents = styled.div`
  margin-top: 64px;
`;
const LinkText = styled.a`
  cursor: pointer;
  margin: 16px;
`;
