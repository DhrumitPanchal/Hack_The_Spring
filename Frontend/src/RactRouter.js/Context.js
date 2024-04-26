import React, { createContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-hot-toast";

export const Context = createContext(null);
export default function MyContext(props) {
  const [user, setUser] = useState({
    userId: "",
    name: "",
    email: "",
    profilePic: "",
    contactNo: null,
    gender: "",
    address: "",
    userRole: "",
    birthday: "",
    category: "",
  });
  const [profilePic, setProfilePic] = useState(null);
  const formData = new FormData();
  const BaseURL = process.env.REACT_APP_BACKENDURL;
  const [works, setWorks] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const navigate = useNavigate();

  const register = async (name, email, password, role) => {
    try {
      const response = await axios.post(`${BaseURL}auth/upload`, formData);

      const { data } = await axios.post(`${BaseURL}auth/register`, {
        name,
        email,
        role,
        password,
        profilePic: response?.data?.ProfilePicUrl,
      });

      setUser({
        userId: data?.user?._id,
        name: data?.user?.name,
        email: data?.user?.email,
        role: data?.user?.role,
        profilePic: data?.user?.profilePic,
      });
      Cookies.set("accessToken", data.access_Token, { expires: 365 });
      toast.success("sign in successfully");
      navigate("/");
    } catch ({ response }) {
      toast.error(response?.data?.msg);
    }
  };

  const login = async (email, password) => {
    try {
      const { data } = await axios.post(`${BaseURL}auth/login`, {
        email,
        password,
      });
      setUser({
        userId: data?.user?._id,
        name: data?.user?.name,
        email: data?.user?.email,
        role: data?.user?.role,
        profilePic: data?.user?.profilePic,
      });
      Cookies.set("accessToken", data.access_Token, { expires: 365 });
      toast.success("sign in successfully");
      navigate("/");
    } catch ({ response }) {
      toast.error(response.data.msg);
    }
  };

  const handelJwtLogin = async () => {
    const token = Cookies.get("accessToken");

    try {
      if (token) {
        const { data } = await axios.post(`${BaseURL}auth/jwtlogin`, {
          access_Token: token,
        });

        setUser({
          userId: data?.user?._id,
          name: data?.user?.name,
          email: data?.user?.email,
          profilePic: data?.user?.profilePic,
          role: data?.user?.role,
          contactNo: data?.user?.contactNo,
          gender: data?.user?.gender,
          address: data?.user?.address,
          userRole: data?.user?.userRole,
          birthday: data?.user?.birthday,
          category: data?.user?.category,
        });
      } else {
        navigate("/login");
      }
    } catch ({ response }) {
      console.log(response);
      navigate("/login");
    }
  };

  const updateUserDetails = async () => {
    console.log();
    try {
      const { data } = await axios.put(`${BaseURL}auth/update`, {
        id: user.userId,
        details: {
          name: user.name,
          email: user.email,
          contactNo: user.contactNo,
          gender: user.gender,
          address: user.address,
          birthday: user.birthday,
          category: user.category,
        },
      });
      setAllUsers(data?.user);
      toast.success("details updated successfully");
    } catch ({ response }) {
      toast.error(response.data.msg);
    }
  };

  const getAllUsers = async () => {
    try {
      const { data } = await axios.get(`${BaseURL}auth/getallusers`);
      setAllUsers(data?.allUsers);
    } catch ({ response }) {
      toast.error(response.data.msg);
    }
  };

  const handelGetAllWorks = async () => {
    try {
      const { data } = await axios.get(`${BaseURL}work/work`);
      setWorks(data?.works);
    } catch ({ response }) {
      toast.error(response.data.msg);
    }
  };

  const handelAddWork = async (WorkData) => {
    console.log(WorkData);
    try {
      const { data } = await axios.post(`${BaseURL}work/work`, {
        data: { postedBY: user.userId, ...WorkData },
      });
      setWorks([...works, data.work]);
      toast.success(data.msg);
    } catch ({ response }) {
      toast.error(response.data.msg);
    }
  };

  const handelUpdateWork = async (ID, WorkData) => {
    try {
      const { data } = await axios.put(`${BaseURL}work/work`, {
        id: ID,
        data: { ...WorkData },
      });

      const updatedWorks = works.map((item) => {
        if (item._id === ID) {
          return data.updatedWork;
        }
        return item;
      });

      setWorks(updatedWorks);
      toast.success(data.msg);
    } catch ({ response }) {
      toast.error(response.data.msg);
    }
  };

  const handelApplyForWork = async (WorkID) => {
    try {
      const { data } = await axios.put(`${BaseURL}work/work/apply`, {
        id: WorkID,
        data: { applicantId: user.userId },
      });

      await works.map((item) => {
        if (item._id === WorkID) {
          return { ...item, applicant: data?.updateWork?.applicant };
        }
        return item;
      });
      handelGetAllWorks();
      toast.success(data.msg);
    } catch ({ response }) {
      toast.error(response.data.msg);
    }
  };

  const handelDeleteWork = async (ID) => {
    try {
      const { data } = await axios.delete(`${BaseURL}work/work`, {
        data: { id: ID },
      });

      const filteredWorks = works.filter((item) => item._id !== ID);
      setWorks(filteredWorks);
      toast.success(data.msg);
    } catch ({ response }) {
      toast.error(response.data.msg);
    }
  };

  const handelSendMessage = async (Data) => {
    try {
      const { data } = await axios.post(`${BaseURL}contact/message`, Data);
      toast.success(data.msg);
    } catch ({ response }) {
      toast.error(response.data.msg);
    }
  };

  useEffect(() => {
    handelJwtLogin();
    handelGetAllWorks();
    getAllUsers();
  }, []);

  return (
    <Context.Provider
      value={{
        user,
        allUsers,
        setUser,
        register,
        login,
        works,
        profilePic,
        formData,
        setProfilePic,
        setWorks,
        updateUserDetails,
        handelAddWork,
        handelGetAllWorks,
        handelUpdateWork,
        handelApplyForWork,
        handelDeleteWork,
        handelSendMessage,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
