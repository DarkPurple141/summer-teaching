
#include "list.h"

// TODO change this code in tutorial
link reverse (link ls) {
   link tmp;
   link curr = ls;
   link rev  = NULL;
   while (curr != NULL) {
      tmp = curr->next;
      curr->next = rev;
      rev  = curr;
      curr = tmp;
   }
   return rev;
}

void insertNext(link ls, link node);
void deleteNext(link ls);
