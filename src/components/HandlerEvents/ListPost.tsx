import { useEffect, useReducer, useCallback } from 'react';
import GetPost from './InforPost';
import conFigData from '../../services/conFixData';
import React from 'react';

interface getTitle {
    title: string;
}

interface PostState {
    postStart: number;
    postEnd: number;
    total: number;
}

// Định nghĩa action types
enum ActionTypes {
    SetPostStart = 'SET_POST_START',
    SetPostEnd = 'SET_POST_END',
    SetTotal = 'SET_TOTAL',
}

// Định nghĩa reducer function
const postReducer = (
    state: PostState,
    action: { type: ActionTypes; payload?: any },
) => {
    switch (action.type) {
        case ActionTypes.SetPostStart:
            return { ...state, postStart: action.payload };
        case ActionTypes.SetPostEnd:
            return { ...state, postEnd: action.payload };
        case ActionTypes.SetTotal:
            return { ...state, total: action.payload };
        default:
            return state;
    }
};

function RenderPost({ title }: getTitle) {
    const initialState: PostState = {
        postStart: 0,
        postEnd: 3,
        total: 0,
    };

    const [state, dispatch] = useReducer(postReducer, initialState);

    useEffect(() => {
        conFigData
            .getCount()
            .then((total) => {
                dispatch({ type: ActionTypes.SetTotal, payload: total });
            })
            .catch((error) => {
                console.log('Can not get count in total from data');
            });
    }, [state.total]);

    const handlerClickViewPost = useCallback(() => {
        // if (state.postEnd === state.total) {
        //   dispatch({ type: ActionTypes.SetPostStart, payload: 0 });
        //   dispatch({ type: ActionTypes.SetPostEnd, payload: 3 });
        // } else {
        //   dispatch({
        //     type: ActionTypes.SetPostStart,
        //     payload: state.postStart + 3,
        //   });
        //   dispatch({ type: ActionTypes.SetPostEnd, payload: state.postEnd + 3 });
        // }

        if (state.postEnd + 3 <= state.total) {
            dispatch({
                type: ActionTypes.SetPostStart,
                payload: state.postStart + 3,
            });
            dispatch({
                type: ActionTypes.SetPostEnd,
                payload: state.postEnd + 3,
            });
        } else {
            if (state.total - state.postEnd > 0) {
                dispatch({
                    type: ActionTypes.SetPostStart,
                    payload: state.postEnd,
                });
                dispatch({
                    type: ActionTypes.SetPostEnd,
                    payload: state.total,
                });
            } else {
                dispatch({ type: ActionTypes.SetPostStart, payload: 0 });
                dispatch({ type: ActionTypes.SetPostEnd, payload: 3 });
            }
        }
    }, [state]);

    return (
        <>
            <div className="posts row gx-md-4">
                <GetPost postStart={state.postStart} postEnd={state.postEnd} />
            </div>
            {/* <button
        className="view rounded d-flex justify-content-center align-items-center"
        onClick={handlerClickViewPost}
      >
        {title}
      </button> */}
            {state.postEnd <= state.total ? ( // Kiểm tra xem có hiển thị nút "Xem thêm" hay không
                <button
                    className="view rounded d-flex justify-content-center align-items-center"
                    onClick={handlerClickViewPost}
                >
                    {title}
                </button>
            ) : null}
        </>
    );
}

export default React.memo(RenderPost);
