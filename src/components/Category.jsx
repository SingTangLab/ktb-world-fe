import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

export function Category() {
  const location = useLocation()

  if (location.pathname === '/user') {
    return null
  }

  return (
    <CategoryContainer>
      <CategoryItem to='/' active={location.pathname === '/'}>
        전체
      </CategoryItem>
      <CategoryItem to='/laundry' active={location.pathname === '/laundry'}>
        세탁
      </CategoryItem>
      <CategoryItem to='/taxi' active={location.pathname === '/taxi'}>
        택시
      </CategoryItem>
      <CategoryItem to='/gonggu' active={location.pathname === '/gonggu'}>
        공구
      </CategoryItem>
      <CategoryItem to='/trip' active={location.pathname === '/trip'}>
        관광
      </CategoryItem>
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

const CategoryItem = styled(Link)`
  height: 40px;
  padding: 14px 19px 12px;
  box-sizing: border-box;
  border-radius: 50px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  background-color: #f6f6f6;
  color: #888;
  text-decoration: none;

  &:hover {
    color: #3578ff;
    background-color: #d9e8ff;
  }

  ${(props) =>
    props.active &&
    css`
      color: #3578ff;
      background-color: #d9e8ff;
    `}
`
