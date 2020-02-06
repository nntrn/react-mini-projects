import styled from 'styled-components'

export const ClockContainer = styled.div`
  width: fit-content;
  margin: auto;
  padding: 1rem;
  line-height: 1;
  display: flex;
  justify-content: center;
  font-family: sans-serif;

  &.clock {
    & button {
      margin: 0;
      padding: 0;
      color: #eee;
      background: #222;
      display: flex;
      width: 50px;
      border: 0;
      outline: 0;

      & span {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2em;
        flex-grow: 1;
        width: 100%;
        &:hover {
          color: #888;
          background: #555;
        }
      }
    }
    & .ampm {
      padding: 0 0.25rem;
      width: 20px;
      white-space: pre;
    }

    & .blinking {
      padding: 0 0.3rem;
      font-size: 2em;
      animation: blinker 1000ms linear infinite;
    }
  }

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
`

export const AnalogClock = styled.div`
  border-radius: 100%;
  background: #ffffff;
  border: 10px solid currentColor;
  box-shadow: inset 2px 3px 8px 0 rgba(0, 0, 0, 0.2);
  width: ${props => props.size};
  height: ${props => props.size};
  margin: auto;

  & .wrap {
    overflow: hidden;
    position: relative;
    width: inherit;
    transform: translateY(-10px) translateX(-10px);
    height: inherit;
    border-radius: 100%;
  }

  & .minute,
  & .hour,
  & .second {
    position: absolute;
    height: 65px;
    width: 5px;
    margin: auto;
    top: ${props => `calc(${props.size} / -3.1)`};
    left: 0;
    bottom: 0;
    right: 0;
    background: currentColor;
    transform-origin: bottom center;
    transform: rotate(0deg);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    z-index: 2;
  }

  & .minute {
    height: calc(100% / 2.75);
    width: 4px;
    top: ${props => `calc(${props.size} / -2.55)`};
    filter: opacity(0.6) contrast(0.8);
    transform: rotate(90deg);
  }

  & .second {
    height: calc(100% / 3.4);
    width: 2px;
    top: ${props => `calc(${props.size} / -3.2)`};
    background: #ff4b3e;
    transform: rotate(180deg);
    z-index: 1;
  }
`
