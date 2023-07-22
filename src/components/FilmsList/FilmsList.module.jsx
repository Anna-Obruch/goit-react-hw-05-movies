import styled from '@emotion/styled';

export const ListFilms = styled.ul`
  margin-top: 12px;
  list-style-type: none;
`;
export const ItemFilms = styled.li`
  font-weight: 400;
  font-size: 16px;

  background-color: #bf9fe3;
  border-radius: 14px;

  :not(:last-child) {
    margin-bottom: 6px;
  }

  a:hover,
  a:focus {
    background-color: #da73de;
    color: #111111;
    border-radius: 14px;
  }

  a {
    display: block;
    padding: 14px 14px;
  }
`;