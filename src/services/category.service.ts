export class CategoryService {
  public async createCategory(requestData: any, attachment: any) {
    return new Promise(async (resolve, reject) => {
      try {
        console.log(requestData);
        console.log(attachment);
      } catch (error) {
        return reject(error);
      }
    });
  }
}
