import { Component } from '@angular/core';

@Component({//装饰器，为组件指定所需元数据
  selector: 'app-root',//组件选择器（css元素选择器）
  templateUrl: './app.component.html',//组件模板的位置
  styleUrls: ['./app.component.less']//组件私有的css样式文件位置
})
export class AppComponent { //导出组件类
  title = 'Tour of Heroes';
}
