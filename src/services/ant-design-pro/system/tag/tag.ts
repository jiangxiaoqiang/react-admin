import request from 'umi-request';
import { history } from 'umi';
import { EntityList, ResponseHandler } from 'rdjs-wheel';

export async function tagPage(
    params: {
      pageNum?: number;
      pageSize?: number;
    },
    options?: { [key: string]: any },
  ) {
    let response = await request<API.ApiResponse>('/manage/sys/tag/v1/page', {
      method: 'POST',
      body: JSON.stringify({
        ...params
      }),
      ...(options || {}),
    });
    let dataList: EntityList<API.TagItem> = ResponseHandler.mapPageResponse<API.TagItem>(response);
    return dataList;
  }

export async function getTagList(params: any){
  let response = await request<API.ApiResponse>('/manage/sys/tag/v1/list', {
    method: 'POST',
    body: JSON.stringify({
      ...params
    }),
  });
  return response.result as API.TagItem[];
}

export async function saveUserRoles(options?: { [key: string]: any }) {
  let requestData = (options || {});
  return request<API.ApiResponse>('/manage/permission/user/v1/save_roles', {
    method: 'PUT',
    body: JSON.stringify(requestData),
  });
}

export async function addNewUser(options?: { [key: string]: any }) {
  let requestData = (options || {});
  return request<API.ApiResponse>('/manage/permission/user/v1/add', {
    method: 'PUT',
    body: JSON.stringify(requestData),
  });
}

export async function changePassword(options?: { [key: string]: any }) {
  let requestData = (options || {});
  let changePwdResult = request<API.ApiResponse>('/manage/permission/user/v1/pwd/edit', {
    method: 'POST',
    body: JSON.stringify(requestData),
  });
  if(ResponseHandler.responseSuccess(changePwdResult)){
    history.push("/user/login");
  }
}

export async function updateInterview(options?: { [key: string]: any }) {
  let requestData = (options || {});
  return request<API.InterviewListItem>('/manage/app/job/interview/v1/update', {
    method: 'POST',
    body: JSON.stringify(requestData),
  });
}