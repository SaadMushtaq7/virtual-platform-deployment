export interface postDataType {
    profileImage: string;
    username: string;
    time: string;
    postType: {
        icon: string;
        type: string;
    };
    postText: string;
    postImage: string;
    reactions: string[];
    reactionsCount: number;
    commentsCount: number;
    sharesCount: number;
}