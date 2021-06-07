const fetch = jest.fn()

it("fetch api to interact with other api's", async () => {
  fetch.mockReturnValueOnce(JSON.stringify({user: { id: "jaco" }}));

  const call = await fetch();
  const data = JSON.parse(call);
  const word = data.user.id;

  expect(word).toEqual("jaco");
  expect(fetch).toHaveBeenCalledTimes(1);
})