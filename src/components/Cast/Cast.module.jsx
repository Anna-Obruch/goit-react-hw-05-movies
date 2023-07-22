import styled from '@emotion/styled';

export const StyledList = styled.ul`
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  list-style-type: none;
  
`;
export const ListItem = styled.li`
  min-width: 182px;
  font-size: 16px;
  padding: 6px;
  max-width: min-content;
  background-color: #cba8e3;
  border-radius: 14px;

  :not(:last-child) {
    margin-bottom: 6px;
  }

  img {
    max-width: 182px;
    border-radius: 8px;
  }
  span {
    color: #260b38;
  }
`;