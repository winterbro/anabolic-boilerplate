import { useAppDispatch, useAppSelector } from 'store/hooks';
import { counterSlice } from 'store';
import styled from 'styled-components';

const StyledCounter = styled.button`
  padding: 0.6em 1.2em;
  margin-bottom: var(--space-xs);
  font-family: inherit;
  color: #fff;
  cursor: pointer;
  background-color: #1a1a1a;
  border: 1px solid transparent;
  border-radius: 8px;
  transition: border - color 0.25s;

  &:hover {
    border-color: #646cff;
  }

  &:focus,
  &:focus-visible {
    outline: 4px auto - webkit - focus - ring - color;
  }
`;

function Counter() {
  const count = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <StyledCounter
      type="button"
      onClick={() => dispatch(counterSlice.actions.increment())}
    >
      count is {count.value}
    </StyledCounter>
  );
}

export { Counter, StyledCounter };
