function queryTasks() {  
    const totalTasks = parseInt(document.getElementById('totalTasks').value, 10);  
    const groupNumber = parseInt(document.getElementById('groupNumber').value, 10);  
    let result = document.getElementById('result');  
    let tasks = [];  
  
    if (!isNaN(totalTasks) && totalTasks > 0 && !isNaN(groupNumber) && groupNumber >= 1 && groupNumber <= 4) {  
 
        for (let i = 1; i <= totalTasks; i++) {  
            const groupIndex = (i - 1) % 4 + 1; // 计算每个任务属于哪个组（1-4）  
            if (groupIndex === groupNumber) {  
                tasks.push(`页面${i}`); // 格式化任务名称为“任务X”  
            }  
        }  
  
        // 显示结果  
        if (tasks.length > 0) {  
            // 使用列表格式显示任务  
            let listHTML = '<ul>';  
            tasks.forEach(task => {  
                listHTML += `<li>${task}</li>`;  
            });  
            listHTML += '</ul>';  
            result.innerHTML = `在该页面总量范围内，${groupNumber}组负责巡查的页面有:<br>${listHTML}`;  
        } else {  
            result.textContent = `在指定的页面总量范围内，${groupNumber}组没有负责的页面。`;  
        }  
    } else {  
        result.textContent = "请输入有效的页面总量和组别";  
    }  
}