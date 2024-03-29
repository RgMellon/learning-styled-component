import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const IssueList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }
  }

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 2px solid #eee;
  }

  div {
    flex: 1;
    margin-left: 15px;

    strong {
      font-size: 16px;

      a {
        text-decoration: none;
        color: #333;

        &:hover {
          color: #7159c1;
        }
      }

      span {
        background: #eee;
        color: #333;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 600;
        height: 20px;
        line-height: 15px;
        padding: 3px 4px;
        margin-left: 10px;
      }
    }

    p {
      margin-top: 5px;
      font-size: 9px;
      color: #999;
    }
  }
`;

export const FiltroIssues = styled.select`
  width: 200px;
  border: 1px solid #eee;
  height: 50px;
  background: white;
  margin-top: 5px;
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
`;

export const ButtonsPaginate = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    margin: 0 20px;
    width: 40px;
    height: 30px;
    color: white;
    border: 0px;
    background: #7159c1;
    border-radius: 4px;
  }
`;

export const HeaderIssue = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
