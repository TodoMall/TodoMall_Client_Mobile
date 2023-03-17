import AWS from "aws-sdk";

import { AWS_KEYS } from "../../../constants";
import { isNull } from "../../../utils/isNull";

const uploadCertificationImage = async (
    target,
    courseId,
    sessionId,
    memberId
) => {
    if (isNull(target)) return;

    try {
        AWS.config.update({
            region: "ap-northeast-2",
            accessKeyId: AWS_KEYS.AWS_ACCESS_KEY_ID,
            secretAccessKey: AWS_KEYS.AWS_SECRET_ACCESS_KEY,
        });

        const uploader = new AWS.S3.ManagedUpload({
            params: {
                Bucket: "todomall-app/assignment",
                Key: `${courseId}/${sessionId}/${memberId}.png`,
                Body: target,
            },
        });
        uploader.promise();
    } catch (error) {
        console.error(error);
    }
};

export default uploadCertificationImage;
