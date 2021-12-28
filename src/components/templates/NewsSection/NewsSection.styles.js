import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import styled from 'styled-components';

export const Wrapper = styled.div`
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  grid-row: 1 / 3;
  grid-column: 3 / 3;
  border-left: 2px solid ${({ theme }) => theme.colors.lightPurple};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 25px 40px 40px;
`;

export const NewsSectionHeader = styled.h3`
  margin: 9px auto 0 0;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

export const ArticleWrapper = styled(ViewWrapper)`
  margin: 30px 0;
  width: 100%;
  max-width: unset;
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.darkGrey};
  p {
    font-size: ${({ theme }) => theme.fontSize.l};
    line-height: 1.4;
  }
`;

export const TitleWrapper = styled.div`
  h4 {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  p {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

export const ContentWrapper = styled.div`
  display: flex;

  img {
    max-width: 200px;
    object-fit: cover;
    margin-left: 25px;
  }
`;
