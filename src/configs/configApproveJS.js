import approve from "approvejs";

const customTests = [{
  id: 'json',
  message: '{ title } must be a valid json.',
  validate: value => {
    try {
      JSON.parse(value);
    } catch (e) {
      return false;
    }
    return true;
  }
}, {
  id: 'notBlank',
  message: '{ title } must not be blank.',
  validate: value => value.trim().length !== 0
}]

export const configApproveJS = () => {
  customTests.forEach(({ id, message, validate }) => {
    approve.addTest({ message, validate }, id);
  });
};