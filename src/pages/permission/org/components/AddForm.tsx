import React, { useEffect } from 'react';
import {
  ProFormText,
  ModalForm,
  ProFormTreeSelect,
} from '@ant-design/pro-form';
import { useIntl, FormattedMessage, IMenuState, MenuProps, Loading, Dispatch, connect } from 'umi';
import { Form } from 'antd';
import { menuTree } from '@/services/ant-design-pro/permission/menu/menu';

export type FormValueType = {
  company?: string;
  address?: string;
  city?: string;
  status?: number;
} & Partial<API.InterviewListItem>;

export type UpdateFormProps = {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => Promise<void>;
  updateModalVisible: boolean;
  values: Partial<API.InterviewListItem>;
};

const AddForm: React.FC<UpdateFormProps & MenuProps> = ({menus,updateModalVisible, values, onCancel, onSubmit, dispatch}) => {
  const intl = useIntl();
  const [form] = Form.useForm()

  useEffect(() => {
    if(updateModalVisible){
      form.resetFields();
      form.setFieldsValue(values);
      
    }
  },[form, updateModalVisible]);

  const loadMenuTree = async () => {
    let params = {
      pageNum: 1,
      pageSize: 10,
      parentId: 0,
    };
    let result:any = (await menuTree(params));
    return result;
  }

  return (
    <ModalForm
    form = {form}
    title={intl.formatMessage({
      id: 'pages.admin.record.add',
      defaultMessage: 'New rule',
    })}
    width="400px"
    visible={updateModalVisible}
    onVisibleChange={(value)=>{
      if(!value){
        onCancel();
      }
    }}
    onFinish={onSubmit}
    >
      <ProFormTreeSelect
        name="parentId"
        label={intl.formatMessage({
          id: 'pages.permission.menu.searchTable.parentName',
          defaultMessage: '父菜单',
        })}
        width="md"
        request={async () => {
          return loadMenuTree();
        }}
        fieldProps={{
          showArrow: false,
          filterTreeNode: true,
          showSearch: true,
          dropdownMatchSelectWidth: false,
          labelInValue: true,
          autoClearSearchValue: true,
          multiple: false,
          treeNodeFilterProp: 'title',
          fieldNames: {
            label: 'name_zh',
            key: 'tree_id_path',
            value: 'id',
          },
        }}
        rules={[
          {
            required: true,
            message: (
              <FormattedMessage
                id="pages.searchTable.updateForm.ruleName.nameRules"
                defaultMessage="请输入规则名称！"
              />
            ),
          },
        ]}
      />
      <ProFormText
        name="name"
        label={intl.formatMessage({
          id: 'pages.permission.menu.searchTable.name',
          defaultMessage: '菜单名称',
        })}
        width="md"
        rules={[
          {
            required: true,
            message: (
              <FormattedMessage
                id="pages.searchTable.updateForm.ruleName.nameRules"
                defaultMessage="请输入规则名称！"
              />
            ),
          },
        ]}
      />
      <ProFormText
        name="nameZh"
        label={intl.formatMessage({
          id: 'pages.permission.menu.searchTable.nameZh',
          defaultMessage: '菜单名称（中）',
        })}
        width="md"
        rules={[
          {
            required: true,
            message: (
              <FormattedMessage
                id="pages.searchTable.updateForm.ruleName.nameRules"
                defaultMessage="请输入规则名称！"
              />
            ),
          },
        ]}
      />
      <ProFormText
        name="path"
        label={intl.formatMessage({
          id: 'pages.permission.menu.searchTable.path',
          defaultMessage: '菜单路由',
        })}
        width="md"
        rules={[
          {
            required: true,
            message: (
              <FormattedMessage
                id="pages.searchTable.updateForm.ruleName.nameRules"
                defaultMessage="请输入规则名称！"
              />
            ),
          },
        ]}
      /> 
      <ProFormText
        name="component"
        label={intl.formatMessage({
          id: 'pages.permission.menu.searchTable.component',
          defaultMessage: '组件路径',
        })}
        width="md"
        rules={[
          {
            required: true,
            message: (
              <FormattedMessage
                id="pages.searchTable.updateForm.ruleName.nameRules"
                defaultMessage="请输入规则名称！"
              />
            ),
          },
        ]}
      />
      <ProFormText
        name="code"
        label={intl.formatMessage({
          id: 'pages.permission.menu.searchTable.code',
          defaultMessage: '菜单编码',
        })}
        width="md"
        rules={[
          {
            required: true,
            message: (
              <FormattedMessage
                id="pages.searchTable.updateForm.ruleName.nameRules"
                defaultMessage="请输入规则名称！"
              />
            ),
          },
        ]}
      /> 
    </ModalForm>
  );
};

const mapStateToProps = ({menus, loading}: {menus: IMenuState, loading: Loading}) => {
  return {
    menus,
    loading: loading.models.menus
 }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
 return {
     dispatch
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);



