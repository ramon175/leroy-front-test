import uuid from 'uuid';

// ADD_POST
export const addPost = ({
    description = '',
    user = undefined,
    votes = 0,
    createdAt = 0,
    tag = ''
} = {}) => ({
    type: 'ADD_POST',
    post: {
        id: uuid(),
        description,
        votes,
        user,
        createdAt,
        tag
    }
});

export const removePost = ({
    id
} = {}) => ({
    type: 'REMOVE_POST',
    id
})

export const upVotePost = ({
    id
} = {}) => ({
    type: 'UPVOTE_POST',
    id
})