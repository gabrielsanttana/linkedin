import styled, {css} from 'styled-components';
import {GrLinkedin} from 'react-icons/gr';
import {AiFillHome, AiOutlineBell, AiFillCaretDown} from 'react-icons/ai';

const iconCSS = css`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;

export const Container = styled.header`
  padding: 0 30px;
  background-color: var(--color-header);
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
  display: none;

  @media only screen and (min-width: 1180px) {
    display: block;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  max-width: 1128px;
  height: 52px;
  margin: 0 auto;
`;

export const LeftComponent = styled.div`
  display: flex;
  align-items: center;
`;

export const LinkedinIcon = styled(GrLinkedin)`
  width: 34px;
  height: 34px;
  color: var(--color-linkedin);
  background-color: var(--color-white);
  border-radius: 4px;
  flex-shrink: 0;
`;

export const SearchInput = styled.input`
  margin-left: 12px;
  background-color: var(--color-input);
  color: var(--color-black);
  border: 0;
`;

export const RightComponent = styled.div`
  display: flex;
  align-items: center;

  nav {
    height: 100%;
    display: flex;
    align-items: center;

    button {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-width: 90px;
      min-height: 100%;
      background: transparent;
      border: 0;
      outline: 0;
      color: var(--color-icons);
      cursor: pointer;

      &:hover {
        color: var(--color-white);
      }

      &.active {
        border-bottom: 2px solid var(--color-white);
      }

      span {
        display: flex;
        align-items: center;
      }
    }
  }
`;

export const HomeIcon = styled(AiFillHome)`
  ${iconCSS}
`;

export const NotificationsIcon = styled(AiOutlineBell)`
  ${iconCSS}
`;

export const ProfileCircle = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid var(--color-icons);
`;

export const CaretDownIcon = styled(AiFillCaretDown)`
  width: 16px;
  height: 16px;
`;
