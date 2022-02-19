export function sortTasks(toDoTasks) {
  return toDoTasks.sort(
    (obj1, obj2) => obj1.index - obj2.index,
  );
}
export function isEmpty(string) {
  const pattern = /^(\s)+$/;
  return pattern.test(string);
}

export function isValid(string) {
  const pattern = /^(\w)+(\w|-|\s)*$/;
  return pattern.test(string.trim());
}

export function isDuplicate(
  string,
  existingTasksDescriptions,
) {
  let result = false;
  existingTasksDescriptions.forEach((td) => {
    if (
      string.trim().toUpperCase() ===
      td.trim().toUpperCase()
    ) {
      result = true;
    }
  });
  return result;
}
