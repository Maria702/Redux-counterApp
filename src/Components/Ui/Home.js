import {useSelector, useDispatch} from 'react-redux';

import {
  MainContainer,
  MainBox,
  Title,
  Items,
  MinusButton,
  ItemsInput,
  PlusButton

} from './HomeElements'

import {incNum, decNum} from '../../Actions/index'


const Home = () => {

  const selector = useSelector(
    (state)=>state.ChangeNum
  );

  const dispatch = useDispatch();

  const handlePlus = ()=>{
    dispatch(incNum());
  }

  const handleMinus = ()=>{
    dispatch(decNum());
  }

  return (
    <>
      <MainContainer>
      <MainBox>
        <Title>  Counter </Title>
        <Items>
          <MinusButton onClick={handleMinus}>-</MinusButton>
          <ItemsInput type='text' value={selector}/>
          <PlusButton onClick={handlePlus}>+</PlusButton>
        </Items>

        </MainBox>
      </MainContainer>
    </>
  )
}

export default Home;