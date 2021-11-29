import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1120px;
  padding: 2rem 1rem 12rem;

  button {
    background-color: var(--blue-light);
    color: #fff;

    border: 0;
    border-radius: 0.25rem;
    font-size: 1rem;
    height: 3rem;
    padding: 0 2rem;

    transition: 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
