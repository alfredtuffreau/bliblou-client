import approve from "approvejs";

export const configApproveJS = () => {
  approve.addTest({
    message: '{ title } must be a valid json.',
    validate: value => {
      try {
        JSON.parse(value);
      } catch (e) {
        return false;
      }
      return true;
    }
  }, 'json');
};