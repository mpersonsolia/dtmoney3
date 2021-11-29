import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    background: #e7e9ee;
    border-radius: 0.25rem;
    height: 4rem;
    padding: 0 1.5rem;
    width: 100%;
    font-size: 1rem;
    font-weight: 400;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    background: var(--green);
    color: #ffffff;
    border: 0;
    border-radius: 0.25rem;
    font-size: 1rem;
    font-weight: 600;
    height: 4rem;
    margin-top: 1.5rem;
    padding: 0 1.5rem;
    width: 100%;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(2, 1fr);
  margin: 1rem 0;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: "green" | "red";
}

const colors = {
  green: "#33cc95",
  red: "#e52e4d",
};

export const RadioBox = styled.button<RadioBoxProps>`
  background: ${(props) =>
    props.isActive
      ? transparentize(0.9, colors[props.activeColor])
      : "transparent"};

  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;

  display: flex;
  align-items: center;
  height: 4rem;
  justify-content: center;

  transition: border-color 0.2s;

  &:hover {
    border-color: ${darken(0.1, "#d7d7d7")};
  }

  img {
    height: 20px;
    width: 20px;
  }

  span {
    color: var(--text-title);

    display: inline-block;
    font-size: 1rem;
    margin-left: 1rem;
  }
`;
