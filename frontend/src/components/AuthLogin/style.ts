import styled from "styled-components";
import imageChildren from "../../assets/image_children_left.jpg";

export const Content = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;

  justify-content: center;
  align-items: center;
`;

export const Container = styled.section`
  width: 944px;
  height: 572px;
  margin: 0 10px;
  background: var(--backgorund-shape-white);
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.05);
  border-radius: var(--border-radios-shape);

  display: flex;
  flex-direction: row;

  .container_l {
    flex: 1.5;
    background: var(--color-default-theme) url("${imageChildren}") center;
    background-blend-mode: multiply;
    border-radius: var(--border-radios-shape) 0 0 var(--border-radios-shape);
    flex-direction: column;
    display: flex;
    justify-content: end;
    padding-bottom: 65px;
    align-items: center;

    p {
      width: 230px;
      font-weight: 400;
      font-size: 40px;
      color: var(--backgorund-shape-white);
      letter-spacing: -2px;
    }

    a {
      width: 225px;
      padding: 15px 0;
      margin-top: 29px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-radius: 30px;
      color: var(--backgorund-shape-white);
      border: var(--backgorund-shape-white) solid 1px;
      text-transform: uppercase;
      transition: background var(--transition-button);

      :hover {
        background-color: var(--backgorund-shape-white);
        color: var(--text-default-3);
        border: var(--backgorund-shape-white) solid 1px;
      }
    }

    @media (max-width: 930px) {
      display: none;
    }
  }

  .container_h {
    flex: 3;
    display: flex;

    .content {
      width: 100%;
      height: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      form {
        padding-top: 85px;

        span {
          width: 100%;
          padding: 0 25px 0 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: var(--text-input);

          background-color: var(--background-input);

          font-size: 18px;
          font-weight: 400;

          border-radius: 8px;
          margin-bottom: 12px;
        }

        input {
          width: 100%;
          padding: 22px;

          font-size: 15px;
          font-weight: 400;
          color: var(--text-input);
          background-color: var(--background-input);
          border: none;
        }
        p {
          width: 100%;
          display: flex;
          justify-content: end;

          a {
            color: var(--text-default-3);
            transition: color var(--transition-button);
            :hover {
              color: var(--text-default-1);
            }
          }
        }
      }
      header {
        padding: 10px 0;
        display: flex;
        justify-content: center;
        align-items: center;

        @media (max-width: 465px) {
          flex-direction: column;
        }

        .error {
          margin: 0 7px 0 0;
          padding: 8px 15px;
          border-radius: 18px;
          background-color: #fff7001a;
          color: var(--color-default-theme);
          display: flex;
          align-items: center;
          p {
            margin-left: 3px;
          }

          @media (max-width: 465px) {
            margin-bottom: 10px;
          }
        }
      }

      button {
        width: 100%;
        padding: 20px;
        margin-top: 38px;

        font-size: 15px;
        font-weight: 500;
        color: #ffffff;

        border-radius: 8px;
        border: none;

        cursor: pointer;
        background-color: var(--color-default-theme);

        text-transform: uppercase;
        transition: background var(--transition-button);

        :hover {
          background-color: var(--color-default-theme-hover);
        }
      }
    }

    @media (max-width: 930px) {
      padding: 0 10px;
    }
  }
`;

export const Footer = styled.footer`
  width: 100%;
  padding: 10px;
  text-align: center;
  font-size: 13px;
  color: var(--text-default-1);
`;
