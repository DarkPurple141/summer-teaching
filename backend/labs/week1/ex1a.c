
#include "list.h"

// Create a new node, initialised with the item provided. Return
// pointer to node (link)
link newNode (Item item);

// Insert a new node into a given non-empty list
// The node is inserted directly after the head of the list ls
void insertNext (link ls, link node);

//Implementations
link newNode(Item item){
    link n = malloc(sizeof(*n));
    if (n == NULL) {
        printf ("Insufficient memory \n");
        abort();
    }
    n->item = item;
    n->next = NULL;
    return n;
}

void insertNext (link ls, link node) {
    assert (ls != NULL);
    assert (node != NULL);
    node->next = ls->next;
    ls->next = node;
}
