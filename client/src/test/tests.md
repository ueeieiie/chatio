## List of tests to run

### Socket.io

1. Check I can emit on the different rooms by getting the respose data
1. Check if io.on('connection) made a connection
1. Check if io.on('disconnect) disconnected
1. Check that two users with the same name gets different avatars url


### ChatApp State

1. Check if the state.messages schema is correct 
1. Check if the state.user schema is correct 

### PostMessage State

1. Check that a user cannot send an empty message
1. Check that a user cannot send a message with only whitespaces
1. Check that a message trims its extra whitespace in the beggining and at the end of it

### Login
1. Check if the input get disabled on click - V

### ChatHistory

1. Check setScrollPosition is being triggered everytime a new message is being posted