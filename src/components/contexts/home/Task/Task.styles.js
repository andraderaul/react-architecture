import styled, { css } from "styled-components";

export const ListItem = styled.div`
  font-size: 14px;
  line-height: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 3rem;
  width: 100%;
  background: white;
  transition: all ease-out 150ms;
`;

export const Title = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;

  input {
    background: transparent;
  }

  input:focus {
    cursor: text;
  }
`;

export const Checkbox = styled.div`
  display: inline-block;
  height: 3rem;
  position: relative;
  vertical-align: middle;
  display: flex;
  align-items: center;
  width: 44px;
`;

export const Actions = styled.div`
  transition: all 200ms ease-in;
  padding-right: 20px;

  a {
    display: inline-block;
    vertical-align: top;
    text-align: center;
    color: #eee;
  }

  a:hover {
    color: #2cc5d2;
  }

  a:active {
    color: #555;
  }
`;
