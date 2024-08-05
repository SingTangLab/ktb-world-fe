import styled from 'styled-components'

export function Category() {
  return (
    <CategoryContainer>
      <CategoryItem>전체</CategoryItem>
      <CategoryItem>세탁</CategoryItem>
      <CategoryItem>택시</CategoryItem>
      <CategoryItem>공구</CategoryItem>
      <CategoryItem>관광</CategoryItem>
    </CategoryContainer>
  )
}

const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;
  gap: 8px;
  padding: 8px 16px;
`

const CategoryItem = styled.div`
  height: 40px;
  padding: 14px 19px 12px;
  box-sizing: border-box;
  border-radius: 50px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  background-color: #f6f6f6;
  color: #888;

  &:hover {
    color: #3578ff;
    background-color: #d9e8ff;
  }
`
