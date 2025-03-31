import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { removeUser } from "../store/slices/UserSlice";
import { useDispatch } from "react-redux";

const DisplayUsers = () => {
  const displatch = useDispatch();
  
  const data = useSelector((state) => {
    return state.users;
  });

  const deleteUsers = (id) => {
    displatch(removeUser(id))
  }

  return (
    <>
      <Wrapper>
        {data.map((item, index) => {
          return (
            <>
              <div className="items">
                <li key={index}>{item}</li>
                <button className="delete-btn  btn-delete" onClick={() => deleteUsers(index)}>
                  <MdDeleteForever className="delete-icon" />
                </button>
              </div>
            </>
          );
        })}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  div.items {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
  }

  .content ul {
    list-style-type: none !important;
    display: flex;
    flex-direction: column;
  }

  h3 {
    margin: 0;
  }

  .admin-table {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 4rem 0;
  }

  .admin-subtitle {
    font-size: 3.2rem;
  }

  .delete-btn {
    background-color: transparent;
    border: none;
  }

  .delete-icon {
    font-size: 2.6rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
  }

  @media screen and (max-width: 998px) {
    .admin-subtitle {
      margin-bottom: 1.6rem;
    }
  }
`;
export default DisplayUsers;
