import React from 'react';
import LandingPage from '../src/components/LandingPage';
import renderer from 'react-test-renderer';

test ('renders correctly', () => {
    const tree = renderer
    .create(<LandingPage />)
    .toJSON();
    expect(tree).toMatchSnapshot();
});

const fetch = jest.fn()

it("fetch api to interact with other api's", async () => {
  fetch.mockReturnValueOnce(JSON.stringify({user: { id: "jaco" }}));

  const call = await fetch();
  const data = JSON.parse(call);
  const word = data.user.id;

  expect(word).toEqual("jaco");
  expect(fetch).toHaveBeenCalledTimes(1);
})