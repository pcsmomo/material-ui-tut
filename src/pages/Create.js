import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container';

export default function Create() {
  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>
      {/* Create page
      <Typography>Create a New Note</Typography>
      <Typography variant="h1" color="primary" align="center">
        Create a New Note
      </Typography>
      <Typography noWrap color="secondary">
        Ex id cupidatat nostrud proident cupidatat est Lorem tempor qui. Ut
        culpa incididunt reprehenderit deserunt enim labore commodo do. Nisi
        ullamco do laboris et. Reprehenderit magna do esse ex non. Reprehenderit
        nostrud adipisicing et elit proident sint.
      </Typography> */}

      <Button
        onClick={() => console.log('you clicked me')}
        type="submit"
        color="secondary"
        variant="contained"
      >
        Submit
      </Button>

      {/* <Button type="submit">Submit</Button>
      <Button type="submit" color="secondary" variant="outlined">
        Submit
      </Button>
      <ButtonGroup color="secondary" variant="contained">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup> */}
    </Container>
  );
}
