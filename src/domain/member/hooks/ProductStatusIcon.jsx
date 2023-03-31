import { COLOR, PROCESS_STATUS } from "../../../constants";
import { RowBox } from "../../../mds/box";
import {
    FailIcon,
    ProgressIcon,
    SuccessIcon,
    WarningIcon,
} from "../../../mds/icon";
import { BodyS } from "../../../mds/text";

const ProductStatusIcon = ({ lastRetryCount, processStatus }) => {
    console.log("lastRetryCount : ", lastRetryCount);
    console.log("processStatus : ", processStatus);
    if (processStatus === PROCESS_STATUS.PROCESS) {
        return (
            <RowBox justifyContent={"flex-start"}>
                <ProgressIcon />
                <BodyS margin={"0 0 0 0.25rem"} fontColor={COLOR.BRAND_COLOR}>
                    진행
                </BodyS>
            </RowBox>
        );
    }

    if (processStatus === PROCESS_STATUS.SUCCESS) {
        return (
            <RowBox justifyContent={"flex-start"}>
                <SuccessIcon />
                <BodyS margin={"0 0 0 0.25rem"} fontColor={COLOR.SUCCESS500}>
                    성공
                </BodyS>
            </RowBox>
        );
    }

    if (processStatus === PROCESS_STATUS.FAIL && lastRetryCount > 0) {
        return (
            <RowBox justifyContent={"flex-start"}>
                <WarningIcon />
                <BodyS margin={"0 0 0 0.25rem"} fontColor={COLOR.ERROR500}>
                    재도전 가능
                </BodyS>
            </RowBox>
        );
    }

    if (processStatus === PROCESS_STATUS.FAIL && lastRetryCount === 0) {
        return (
            <RowBox justifyContent={"flex-start"}>
                <FailIcon />
                <BodyS margin={"0 0 0 0.25rem"} fontColor={COLOR.ERROR500}>
                    재도전 불가
                </BodyS>
            </RowBox>
        );
    }
};

export default ProductStatusIcon;
