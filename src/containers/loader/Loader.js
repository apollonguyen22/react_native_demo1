/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useEffect} from 'react';
import { View, Modal } from 'react-native';
import LottieView from 'lottie-react-native';
import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';
import {styles} from '../../../assets/style/loader/LoaderStyle';
import { useDispatch, useSelector } from 'react-redux';
import { resetTypeLoadingToast } from '../../redux/action/LoadingAction';

const Loader = () => {

    const dispatch = useDispatch();
    const {loading} = useSelector(state => state.LoadingToastReducer);
    const {toast} = useSelector(state => state.LoadingToastReducer);

    const hideLoading = useCallback(() => {
        dispatch(resetTypeLoadingToast());
    },[]);

    const toastConfig = {
        success: ({text1, ...props}) => (
            <BaseToast
                {...props}
                text1= {text1}
                text1Style={{fontSize: 18, fontWeight: 'bold'}}
            />
        ),

        error: ({text1, ...props}) => (
            <ErrorToast
                {...props}
                text1= {text1}
                text1Style={{fontSize: 18, fontWeight: 'bold'}}
            />
        ),
    };

    useEffect(() => {
        if (toast) {
            const {type, text1, onShow} = toast;
            Toast.show({
                type: type,
                text1: text1,
                onShow: onShow,
                onHide: hideLoading,
            });
        }
    }, [toast]);

    return (
        <>
            <Toast config={toastConfig} />
            {loading && (
                <Modal transparent={true} animationType={'none'} visible={loading}>
                    <View style={styles.modalBackGround}>
                        <View style={styles.activityIndiCator}>
                            <LottieView source={require('../../../assets/image/loader.json')} autoPlay loop/>
                        </View>
                    </View>
                </Modal>
            )}
        </>
    );
};

export default Loader;
