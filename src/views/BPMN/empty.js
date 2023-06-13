/*
 * @Author: zzh
 * @Date: 2021-11-25 14:18:52
 * @LastEditors: zzh
 * @LastEditTime: 2023-06-13 17:07:47
 * @FilePath: \process-design\src\views\BPMN\static.js
 * @Description: 请填写简介
 */
// 初始模板
export const template = `
<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:camunda="http://camunda.org/schema/1.0/bpmn" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:activiti="http://activiti.org/bpmn" id="m1577635100724" name="" targetNamespace="http://www.activiti.org/testm1577635100724">
  <process id="process" processType="None" isClosed="false" isExecutable="true">
    <extensionElements>
      <camunda:properties>
        <camunda:property name="a" value="1" />
      </camunda:properties>
    </extensionElements>
    <startEvent id="_2" name="开始">
      <outgoing>Flow_1hgxhjr</outgoing>
    </startEvent>
    <sequenceFlow id="Flow_1hgxhjr" sourceRef="_2" targetRef="Activity_1uw39ir" />
    <userTask id="Activity_1uw39ir" name="人工审核">
      <incoming>Flow_1hgxhjr</incoming>
      <outgoing>Flow_1xapidn</outgoing>
    </userTask>
    <sequenceFlow id="Flow_1xapidn" sourceRef="Activity_1uw39ir" targetRef="Activity_0wiuj4a" />
    <scriptTask id="Activity_0wiuj4a" name="执行脚本">
      <incoming>Flow_1xapidn</incoming>
      <outgoing>Flow_0ufi5xm</outgoing>
    </scriptTask>
    <sequenceFlow id="Flow_0ufi5xm" sourceRef="Activity_0wiuj4a" targetRef="Activity_01zsj3p" />
    <manualTask id="Activity_01zsj3p" name="人工审批">
      <incoming>Flow_0ufi5xm</incoming>
      <outgoing>Flow_0hxye3p</outgoing>
    </manualTask>
    <endEvent id="Event_10rxel7" name="结束">
      <incoming>Flow_0hxye3p</incoming>
    </endEvent>
    <sequenceFlow id="Flow_0hxye3p" sourceRef="Activity_01zsj3p" targetRef="Event_10rxel7" />
  </process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_leave">
    <bpmndi:BPMNPlane id="BPMNPlane_leave" bpmnElement="process">
      <bpmndi:BPMNEdge id="Flow_1hgxhjr_di" bpmnElement="Flow_1hgxhjr">
        <di:waypoint x="236" y="290" />
        <di:waypoint x="290" y="290" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1xapidn_di" bpmnElement="Flow_1xapidn">
        <di:waypoint x="390" y="290" />
        <di:waypoint x="450" y="290" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0ufi5xm_di" bpmnElement="Flow_0ufi5xm">
        <di:waypoint x="550" y="290" />
        <di:waypoint x="610" y="290" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0hxye3p_di" bpmnElement="Flow_0hxye3p">
        <di:waypoint x="710" y="290" />
        <di:waypoint x="772" y="290" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="BPMNShape__2" bpmnElement="_2">
        <omgdc:Bounds x="204" y="274" width="32" height="32" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="209" y="313" width="22" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_10y3qlh_di" bpmnElement="Activity_1uw39ir">
        <omgdc:Bounds x="290" y="250" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_16i25am_di" bpmnElement="Activity_0wiuj4a">
        <omgdc:Bounds x="450" y="250" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1t9ckg8_di" bpmnElement="Activity_01zsj3p">
        <omgdc:Bounds x="610" y="250" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_10rxel7_di" bpmnElement="Event_10rxel7">
        <omgdc:Bounds x="772" y="272" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <omgdc:Bounds x="779" y="315" width="22" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</definitions>
`;
