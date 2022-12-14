import axios from "axios";
import { authorization } from "./configAut.js";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const GET_PROFESSIONALS = "GET_PROFESSIONALS";
export const GET_TURNS = "GET_TURNS";
export const GET_GYM_INFO = "GET_GYM_INFO";
export const FILTER_BY_ACTIVITY = "FILTER_BY_ACTIVITY";
export const FILTER_BY_DAY = "FILTER_BY_DAY";
export const GET_ALL_TURNS = "GET_ALL_TURNS";
export const POST_REGISTER = "POST_REGISTER";
export const POST_USER_LOGIN = "USER_LOGIN";
export const DELETE_PROF = "DELETE_PROF";
export const EDIT_PROF = "EDIT_PROF";
export const POST_PROF = "POST_PROF";
export const DELETE_ACTIV = "DELETE_ACTIV";
export const POST_ACTIV = "POST_ACTIV";
export const POST_CLASSPASS = "POST_CLASSPASS";
export const DELETE_TURN = "DELETE_TURN";
export const PUT_DATA_USER = "PUT_DATA_USER";
export const GET_MEMBERSHIPS = "GET_MEMBERSHIPS";
export const PAYMENT = "PAYMENT";
export const DELETE_ALERT_LOGIN = "DELETE_ALERT_LOGIN";
export const POST_USER_LOGIN_THIRD = "POST_USER_LOGIN_THIRD";
export const DELETE_FORM_REGISTER = "DELETE_REGISTER";
export const PAYMENT_ERROR = "PAYMENT_ERROR";
export const FORGOT_EMAIL = "FORGOT_EMAIL";
export const GET_USER_INFO = "GET_USER_INFO";
export const UPDATE_PAYMENT = "UPDATE_PAYMENT";
export const LOGOUT_USER = "LOGOUT_USER";
export const SUBSCRIPTION_USER = "SUBSCRIPTION_USER";
export const UPDATE_SUBSCRIPTION = "UPDATE_SUBSCRIPTION";
export const FORGOT_PASSWORD = "FORGOT_PASSWORD";
export const RESET_PASSWORD = "RESET_PASSWORD";
export const UPDATE_CAPACITY = "UPDATE_CAPACITY";
export const DELETE_MESSAGE_FORGOT = "DELETE_MESSAGE_FORGOT";
export const ELIMINAR_USER = "ELIMINAR_USER";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const GET_INACTIVE_USERS = "GET_INACTIVE_USERS";
export const HABILITAR_USER = "HABILITAR_USER";
export const DELETE_MEMBERSHIP = "DELETE_MEMBERSHIP";
export const UPDATE_MEMBERSHIP = "UPDATE_MEMBERSHIP";
export const POST_MEMBERSHIP = "POST_MEMBERSHIP";
export const RATING_ACTV = "RATING_ACTV";
export const USER_ACTIVITY_LIST = "USER_ACTIVITY_LIST";
export const USER_RATINGS_LIST = "USER_RATINGS_LIST";

export const getMemberships = () => {
  return async (dispatch) => {
    try {
      const membership = await axios.get(
        "https://henryfitness.herokuapp.com/membership"
      );
      dispatch({
        type: GET_MEMBERSHIPS,
        payload: membership.data,
      });
    } catch (error) {}
  };
};

export const getActivities = () => {
  return async (dispatch) => {
    try {
      const activities = await axios.get(
        "https://henryfitness.herokuapp.com/activity"
      );
      dispatch({
        type: GET_ACTIVITIES,
        payload: activities.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getUserInfo = (id) => {
  return async (dispatch) => {
    try {
      const userInfo = await axios.get(
        `https://henryfitness.herokuapp.com/user/${id}`
      );
      dispatch({
        type: GET_USER_INFO,
        payload: userInfo.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteActiv = (id) => {
  return async (dispatch) => {
    try {
      const deleteAct = await axios.delete(
        `https://henryfitness.herokuapp.com/activity/${id}`
      );
      dispatch({
        type: DELETE_ACTIV,
        payload: deleteAct.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const postActiv = (obj) => {
  return async (dispatch) => {
    try {
      const postAct = await axios.post(
        `https://henryfitness.herokuapp.com/activity`,
        obj
      );
      dispatch({
        type: POST_ACTIV,
        payload: postAct.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getProfessionals = () => {
  return async (dispatch) => {
    try {
      const prof = await axios.get(
        "https://henryfitness.herokuapp.com/professional"
      );
      dispatch({
        type: GET_PROFESSIONALS,
        payload: prof.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteProf = (id) => {
  return async (dispatch) => {
    try {
      const delProf = await axios.delete(
        `https://henryfitness.herokuapp.com/professional/${id}`
      );
      dispatch({
        type: DELETE_PROF,
        payload: delProf.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const editProf = (obj) => {
  return async (dispatch) => {
    try {
      const editProf = await axios.put(
        `https://henryfitness.herokuapp.com/professional/`,
        obj
      );
      dispatch({
        type: EDIT_PROF,
        payload: editProf.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const postProf = (obj) => {
  return async (dispatch) => {
    try {
      const postProf = await axios.post(
        `https://henryfitness.herokuapp.com/professional`,
        obj
      );

      dispatch({
        type: POST_PROF,
        payload: postProf.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getTurns = (filter) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_TURNS,
        payload: filter.length > 0 ? filter : [],
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllTurns = () => {
  return async (dispatch) => {
    try {
      const turnos = await axios.get(
        "https://henryfitness.herokuapp.com/classpass"
      );
      dispatch({
        type: GET_ALL_TURNS,
        payload: turnos.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getGymInfo = () => {
  return async (dispatch) => {
    //const auth = authorization();
    try {
      const info = await axios.get("https://henryfitness.herokuapp.com/gym");
      dispatch({
        type: GET_GYM_INFO,
        payload: info.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

/* export const commentAndRate = (rate) => {
  async (dispatch) => {
    try {
      const rate = await axios.post(
        "https://henryfitness.herokuapp.com/comments",
        rate
      );
      dispatch({
        type: POST_RATE,
        payload: rate.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}; */

export const filterByActivity = (payload) => {
  return (dispatch) => {
    dispatch({
      type: FILTER_BY_ACTIVITY,
      payload: payload,
    });
  };
};

export const postRegister = (info) => {
  return async function (dispatch) {
    try {
      let respuesta = await axios.post(
        "https://henryfitness.herokuapp.com/user",
        info
      );
      let usuario = respuesta.data;
      localStorage.setItem("usuario", JSON.stringify(usuario));

      if (respuesta) {
        dispatch({
          type: POST_REGISTER,
          payload: usuario,
        });
      }
    } catch (error) {
      if (error) {
        dispatch({
          type: POST_REGISTER,
          payload: error.response.data,
        });
      }
    }
  };
};

export const userLogin = (infologin) => {
  return async function (dispatch) {
    try {
      let respuesta = await axios.post(
        "https://henryfitness.herokuapp.com/userlogin",
        infologin
      );
      let usuario = respuesta.data;
      localStorage.setItem("usuario", JSON.stringify(usuario));
      console.log(respuesta);
      if (respuesta) {
        dispatch({
          type: POST_USER_LOGIN,
          payload: respuesta,
        });
      }
    } catch (error) {
      if (error) {
        dispatch({
          type: POST_USER_LOGIN,
          payload: error.response.data,
        });
      }
    }
  };
};

export const postClasspass = (id, obj) => {
  return async function (dispatch) {
    try {
      const resClass = await axios.post(
        `https://henryfitness.herokuapp.com/classpass/${id}`,
        obj
      );
      dispatch({
        type: POST_CLASSPASS,
        payload: resClass.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const editUser = (obj) => {
  console.log("titi", obj);
  return async (dispatch) => {
    try {
      const putUser = await axios.put(
        "https://henryfitness.herokuapp.com/user",
        obj
      );
      dispatch({
        type: PUT_DATA_USER,
        payload: putUser.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deletTurn = (id, h) => {
  return async function (dispatch) {
    try {
      const delTurn = await axios.delete(
        `https://henryfitness.herokuapp.com/classpass/${id}`
      );
      const dos = delTurn.data.filter((tur) => tur.activity !== null);
      const uno = dos.filter(
        (tur) => tur.activity.name.toUpperCase() === h.toUpperCase()
      );
      return dispatch({
        type: DELETE_TURN,
        payload: uno,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteAlert = () => {
  return async function (dispatch) {
    dispatch({
      type: DELETE_ALERT_LOGIN,
      payload: "",
    });
  };
};

export const deleteformregister = () => {
  return async function (dispatch) {
    dispatch({
      type: DELETE_FORM_REGISTER,
      payload: "",
    });
  };
};

export const regiterFacebook_Google = (inforedes) => {
  return async function (dispatch) {
    try {
      let respuesta = await axios.post(
        "https://henryfitness.herokuapp.com/userloginthird",
        inforedes
      );
      let usuario = respuesta.data;
      localStorage.setItem("usuario", JSON.stringify(usuario));
      console.log(respuesta);
      if (respuesta) {
        dispatch({
          type: POST_USER_LOGIN_THIRD,
          payload: respuesta,
        });
      }
    } catch (error) {
      if (error) {
        dispatch({
          type: POST_USER_LOGIN_THIRD,
          payload: error?.response.data,
        });
      }
    }
  };
};

export function stripeAction(paymentMethod, info) {
  return async function (dispatch) {
    try {
      const { data } = await axios.post(
        "https://henryfitness.herokuapp.com/payment",
        {
          paymentMethod,
          info,
        }
      );

      return dispatch({
        type: PAYMENT,
        payload: data,
      });
    } catch (error) {
      console.log(error.response.data);
      return dispatch({
        type: PAYMENT_ERROR,
        payload: error.response.data,
      });
    }
  };
}

export function updatePayment() {
  return async function (dispatch) {
    return dispatch({
      type: UPDATE_PAYMENT,
    });
  };
}

export function subscriptionUser(userId) {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(
        `https://henryfitness.herokuapp.com/subscription/${userId}`
      );
      //console.log(data)
      return dispatch({
        type: SUBSCRIPTION_USER,
        payload: data,
      });
    } catch (error) {
      console.log(error.response.data);
      return dispatch({
        type: SUBSCRIPTION_USER,
        payload: error.response.data,
      });
    }
  };
}

export function updateSubscription() {
  return async function (dispatch) {
    return dispatch({
      type: UPDATE_SUBSCRIPTION,
    });
  };
}

export function forgotPassword(info) {
  return async function (dispatch) {
    try {
      const respuesta = await axios.post(
        "https://henryfitness.herokuapp.com/forgotpassword",
        info
      );
      console.log(respuesta);
      return dispatch({
        type: FORGOT_PASSWORD,
        payload: respuesta.data,
      });
    } catch (error) {
      console.log(error.response.data);
      return dispatch({
        type: FORGOT_PASSWORD,
        payload: error.response.data,
      });
    }
  };
}

export function logoutUser() {
  return async function (dispatch) {
    return dispatch({
      type: LOGOUT_USER,
    });
  };
}

export const deleteMessagePassword = () => {
  return async function (dispatch) {
    dispatch({
      type: DELETE_MESSAGE_FORGOT,
      payload: "",
    });
  };
};

export const updateCapacity = (obj) => {
  return async function (dispatch) {
    try {
      const capacity = await axios.put(
        "https://henryfitness.herokuapp.com/classpass",
        obj
      );
      return dispatch({
        type: UPDATE_CAPACITY,
        payload: capacity.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const eliminarUser = (id, paranoid) => {
  return async function (dispatch) {
    /* console.log("soy actions", id, paranoid); */
    try {
      const eliminar = await axios.delete(
        `https://henryfitness.herokuapp.com/user/${id}`,
        {
          data: { paranoid: paranoid },
        }
      );
      return dispatch({
        type: ELIMINAR_USER,
        payload: eliminar.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllUsers = () => {
  return async function (dispatch) {
    try {
      const usuarios = await axios.get(
        "https://henryfitness.herokuapp.com/user"
      );
      return dispatch({
        type: GET_ALL_USERS,
        payload: usuarios.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export function newPassword(info) {
  console.log(info);
  return async function (dispatch) {
    try {
      const respuesta = await axios.put(
        "https://henryfitness.herokuapp.com/resetpassword",
        info
      );
      console.log(respuesta);
      return dispatch({
        type: RESET_PASSWORD,
        payload: respuesta.data,
      });
    } catch (error) {
      console.log(error.response.data);
      return dispatch({
        type: RESET_PASSWORD,
        payload: error.response.data,
      });
    }
  };
}

export const getInactiveUsers = () => {
  return async (dispatch) => {
    try {
      const usuarioInactivo = await axios.get(
        "https://henryfitness.herokuapp.com/userinactive"
      );
      dispatch({
        type: GET_INACTIVE_USERS,
        payload: usuarioInactivo.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const habilitarUser = (id) => {
  console.log(id);
  return async function (dispatch) {
    try {
      const habilitado = await axios.put(
        `https://henryfitness.herokuapp.com/userinactive/${id}`
      );
      return dispatch({
        type: HABILITAR_USER,
        payload: habilitado.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteMembership = (id) => {
  return async (dispatch) => {
    try {
      const deleteMemb = await axios.delete(
        `https://henryfitness.herokuapp.com/membership/${id}`
      );
      dispatch({
        type: DELETE_MEMBERSHIP,
        payload: deleteMemb.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateMembership = (id, obj) => {
  return async (dispatch) => {
    try {
      const updateMemb = await axios.put(
        `https://henryfitness.herokuapp.com/membership/${id}`,
        obj
      );
      dispatch({
        type: UPDATE_MEMBERSHIP,
        payload: updateMemb.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const postMembership = (obj) => {
  return async (dispatch) => {
    try {
      const postMemb = await axios.post(
        `https://henryfitness.herokuapp.com/membership`,
        obj
      );

      dispatch({
        type: POST_MEMBERSHIP,
        payload: postMemb.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const ratingActv = () => {
  return async function (dispatch) {
    try {
      const dato = await axios.get(`https://henryfitness.herokuapp.com/rating`);
      return dispatch({
        type: RATING_ACTV,
        payload: dato.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getUserActivityList = (userId) => {
  return async function (dispatch) {
    try {
      const dato = await axios.get(
        `https://henryfitness.herokuapp.com/activity/${userId}`
      );
      return dispatch({
        type: USER_ACTIVITY_LIST,
        payload: dato.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const postRating = (obj) => {
  return async function (dispatch) {
    try {
      const resp = await axios.post(
        `https://henryfitness.herokuapp.com/rating/`,
        obj
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const getUserRatingList = (userId) => {
  return async function (dispatch) {
    try {
      const dato = await axios.get(
        `https://henryfitness.herokuapp.com/rating/user/${userId}`
      );
      return dispatch({
        type: USER_RATINGS_LIST,
        payload: dato.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
