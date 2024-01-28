import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createMeeting } from "../../store/actions/folderActions";

const Meeting = () => {
    const [payload, setPayload] = useState()
    const dispatch =  useDispatch()
    useLayoutEffect(()=> {
        dispatch(createMeeting()).then((result) => {
            console.log(result.data[0])
        }).catch((err) => {
            console.log(err)
        });
    },[])
  useEffect(() => {
    const loadZoom = async () => {
      const { ZoomMtg } = await import("@zoomus/websdk");
      ZoomMtg.setZoomJSLib('https://source.zoom.us/lib', '/av');
      ZoomMtg.preLoadWasm();
      ZoomMtg.prepareWebSDK();
      ZoomMtg.generateSDKSignature({
        meetingNumber:payload.meetingNumber,
        role:payload.role,
        sdkKey:payload.sdkKey,
        sdkSecret:payload.sdkSecret,
        success:function(signature) {
            ZoomMtg.init({
                leaveUrl:payload.leaveUrl,
                success:function(data){
                ZoomMtg.join({
                    meetingNumber:payload.meetingNumber,
                    signature:signature.result,
                    userName:payload.userName,
                    userEmail:payload.userEmail,
                    passWord:payload.passWord,
                    tk:'',
                    success:function(){
                        console.log("++++Joined++++")
                    },
                    error:function(err) {
                        console.log(err)
                    }

                })
                },
                error: function(err){
                    console.log(err)
                }
            })
        },
        error:function(error){
            console.log(error)
        }
      })
    };

    loadZoom();
  }, []);

  return <h1>From Meeting</h1>;
};

export default Meeting;
